const express = require('express');
const multer = require('multer');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(__dirname));

// Criar diretório de uploads se não existir
const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir);
}

// Configurar multer para upload de vídeos
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadsDir);
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, 'video-' + uniqueSuffix + path.extname(file.originalname));
    }
});

const upload = multer({
    storage: storage,
    limits: { fileSize: 100 * 1024 * 1024 }, // 100MB
    fileFilter: (req, file, cb) => {
        if (file.mimetype.startsWith('video/')) {
            cb(null, true);
        } else {
            cb(new Error('Apenas arquivos de vídeo são permitidos'));
        }
    }
});

// Arquivo de dados de candidatos
const candidatesFile = path.join(__dirname, 'candidates.json');

// Inicializar arquivo de candidatos se não existir
if (!fs.existsSync(candidatesFile)) {
    fs.writeFileSync(candidatesFile, JSON.stringify([], null, 2));
}

// Rota para upload de vídeo e envio de formulário
app.post('/api/submit-adoption', upload.single('videoFile'), (req, res) => {
    try {
        const { petId, fullName, email, phone, address } = req.body;

        // Validação básica
        if (!petId || !fullName || !email || !phone || !address) {
            return res.status(400).json({ 
                success: false, 
                message: 'Campos obrigatórios faltando' 
            });
        }

        // Ler candidatos existentes
        let candidates = JSON.parse(fs.readFileSync(candidatesFile, 'utf8'));

        // Criar novo candidato
        const newCandidate = {
            id: Date.now(),
            petId: parseInt(petId),
            fullName,
            email,
            phone,
            address,
            videoFile: req.file ? req.file.filename : null,
            videoPath: req.file ? `/uploads/${req.file.filename}` : null,
            status: 'pending',
            createdAt: new Date().toISOString()
        };

        // Adicionar candidato
        candidates.push(newCandidate);

        // Salvar no arquivo
        fs.writeFileSync(candidatesFile, JSON.stringify(candidates, null, 2));

        res.json({
            success: true,
            message: 'Candidatura enviada com sucesso!',
            candidate: newCandidate
        });

    } catch (error) {
        console.error('Erro ao processar candidatura:', error);
        res.status(500).json({
            success: false,
            message: 'Erro ao processar candidatura: ' + error.message
        });
    }
});

// Rota para obter candidatos (para admin)
app.get('/api/candidates', (req, res) => {
    try {
        const candidates = JSON.parse(fs.readFileSync(candidatesFile, 'utf8'));
        res.json(candidates);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao ler candidatos' });
    }
});

// Rota para servir a página principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`🐾 PetAdoção rodando em http://localhost:${PORT}`);
    console.log(`📝 Candidaturas salvas em: ${candidatesFile}`);
});
