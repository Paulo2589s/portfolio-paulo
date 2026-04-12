// Dados de animais de exemplo
const petsData = [
    {
        id: 1,
        name: "Luna e Tonny",
        type: "Gato",
        breed: "Persa",
        age: "6 meses",
        weight: "4.5 kg",
        region: "São Paulo",
        description: "Luna é uma gata carinhosa e dócil, perfeita para famílias. Adora brincar com bolinhas e receber carinhos.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlqu6Ku_6w2QyJVU7U1L0YKzDQg8xdYU8H7g&s"
    },
    {
        id: 2,
        name: "Max",
        type: "Cão",
        breed: "Golden Retriever",
        age: "3 anos",
        weight: "32 kg",
        region: "Rio de Janeiro",
        description: "Max é um cão amigável e energético. Adora correr no parque e brincar com crianças. Perfeito para famílias ativas.",
        image: "https://static.wixstatic.com/media/fcdc74_11e561dfce8a4c83a598dbe74de6a3a4~mv2.jpg/v1/fill/w_640,h_524,al_r,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/fcdc74_11e561dfce8a4c83a598dbe74de6a3a4~mv2.jpg"
    },
    {
        id: 3,
        name: "Bella",
        type: "Cão",
        breed: "Labrador",
        age: "4 anos",
        weight: "28.5 kg",
        region: "Minas Gerais",
        description: "Bella é uma cadela carinhosa e leal. Adora companhia e é ótima com crianças. Precisa de exercício diário.",
        image: "https://cdn.pixabay.com/photo/2021/04/07/05/39/labrador-retriever-6158095_640.jpg"
    },
    {
        id: 4,
        name: "Miau",
        type: "Gato",
        breed: "Siamês",
        age: "1 ano",
        weight: "3.2 kg",
        region: "São Paulo",
        description: "Miau é um gatinho brincalhão e curioso. Adora subir em móveis e explorar cada canto da casa.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR30AfOAIzkLb3qwUv7IMl0TKB0UqsEiZOfog&s"
    },
    {
        id: 5,
        name: "Rex",
        type: "Cão",
        breed: "Pastor Alemão",
        age: "5 anos",
        weight: "35 kg",
        region: "Bahia",
        description: "Rex é um cão protetor e inteligente. Excelente para quem procura um companheiro leal e bem-treinado.",
        image: "https://images.pexels.com/photos/3709026/pexels-photo-3709026.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    },
    {
        id: 6,
        name: "Snowball",
        type: "Coelho",
        breed: "Angorá",
        age: "1.5 anos",
        weight: "2.5 kg",
        region: "Santa Catarina",
        description: "Snowball é um coelho fofinho e dócil. Perfeito para apartamentos e crianças. Precisa de espaço para pular.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNjVLwPwLdmiGtvl3U66ngOUO9iY9SuzaEIw&s"
    },
    {
        id: 7,
        name: "Tweety",
        type: "Pássaro",
        breed: "Canário",
        age: "2 anos",
        weight: "0.02 kg",
        region: "Paraná",
        description: "Tweety é um canário cantador. Sua melodia encantadora traz alegria para qualquer lar.",
        image: "https://lh4.googleusercontent.com/proxy/0PjcHYML5KtJP3H3i7TXrGok7Yszo40WvopWv0-MxsEKjxE-PZVLQRl_mwhxrVR6yaA6WqVKggmkkhhxkb1VzryA6117xw"
    },
    {
        id: 8,
        name: "Shelly",
        type: "Tartaruga",
        breed: "Tartaruga Terrestre",
        age: "10 anos",
        weight: "15 kg",
        region: "Ceará",
        description: "Shelly é uma tartaruga calma e longeviva. Perfeita para quem quer um companheiro de longa vida.",
        image: "https://media.istockphoto.com/id/824592970/pt/foto/small-turtle-on-a-hand-with-leaves-on-the-background.jpg?s=612x612&w=0&k=20&c=GvmSXd5nSMH9dWpGWpJbhl93Sfl3hSiJa_TLfxowdWo="
    },
    {
        id: 9,
        name: "Fluffy",
        type: "Gato",
        breed: "Angorá",
        age: "2.5 anos",
        weight: "5 kg",
        region: "Pernambuco",
        description: "Fluffy é um gato peludo e carinhoso. Adora receber carinhos e dormir em lugares quentinhos.",
        image: "https://www.patasdacasa.com.br/sites/default/files/styles/article_detail_1200/public/2025-10/diferenca-angora-e-persa.jpg.webp?itok=5PEnO7uC"
    },
    {
        id: 10,
        name: "Charlie",
        type: "Cão",
        breed: "Poodle",
        age: "2 anos",
        weight: "8 kg",
        region: "São Paulo",
        description: "Charlie é um cãozinho pequeno e inteligente. Ideal para apartamentos e ótimo para idosos.",
        image: "https://www.petlove.com.br/images/breeds/193449/profile/original/poodle-p.jpg?1532539364"
    }
];

// Estado da aplicação
let currentPetId = null;
let filteredPets = [...petsData];

// Elementos do DOM
const petsList = document.getElementById('petsList');
const searchInput = document.getElementById('searchInput');
const typeFilter = document.getElementById('typeFilter');
const regionFilter = document.getElementById('regionFilter');
const petModal = document.getElementById('petModal');
const adoptionModal = document.getElementById('adoptionModal');
const adoptionForm = document.getElementById('adoptionForm');
const modalCloseButtons = document.querySelectorAll('.modal-close');
const cancelAdoptionBtn = document.getElementById('cancelAdoption');
const adoptBtn = document.getElementById('adoptBtn');

// Event Listeners
searchInput.addEventListener('input', filterPets);
typeFilter.addEventListener('change', filterPets);
regionFilter.addEventListener('change', filterPets);
adoptBtn.addEventListener('click', openAdoptionForm);
cancelAdoptionBtn.addEventListener('click', closeAdoptionModal);
adoptionForm.addEventListener('submit', handleFormSubmit);

// Fechar modais ao clicar no X
modalCloseButtons.forEach(btn => {
    btn.addEventListener('click', function() {
        this.closest('.modal').classList.remove('active');
    });
});

// Fechar modal ao clicar fora
window.addEventListener('click', function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.classList.remove('active');
    }
});

// Função para renderizar animais
function renderPets(pets) {
    if (pets.length === 0) {
        petsList.innerHTML = `
            <div class="empty-state" style="grid-column: 1/-1;">
                <h3>Nenhum animal encontrado</h3>
                <p>Tente ajustar seus filtros de busca</p>
            </div>
        `;
        return;
    }

    petsList.innerHTML = pets.map(pet => `
        <div class="pet-card" onclick="openPetDetail(${pet.id})">
            <div class="pet-image">
                <img src="${pet.image}" alt="${pet.name}" onerror="this.style.display='none'">
                <div class="pet-type-badge">${pet.type}</div>
            </div>
            <div class="pet-info">
                <h3 class="pet-name">${pet.name}</h3>
                <div class="pet-details-mini">
                    <div class="pet-detail-item"><strong>Raça:</strong> ${pet.breed}</div>
                    <div class="pet-detail-item"><strong>Idade:</strong> ${pet.age}</div>
                    <div class="pet-detail-item"><strong>Peso:</strong> ${pet.weight}</div>
                    <div class="pet-detail-item"><strong>Região:</strong> ${pet.region}</div>
                </div>
                <p class="pet-description">${pet.description}</p>
                <button class="btn-view" onclick="event.stopPropagation();">Ver Detalhes</button>
            </div>
        </div>
    `).join('');
}

// Função para filtrar animais
function filterPets() {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedType = typeFilter.value;
    const selectedRegion = regionFilter.value;

    filteredPets = petsData.filter(pet => {
        const matchesSearch = pet.name.toLowerCase().includes(searchTerm) || 
                            pet.breed.toLowerCase().includes(searchTerm);
        const matchesType = !selectedType || pet.type === selectedType;
        const matchesRegion = !selectedRegion || pet.region === selectedRegion;

        return matchesSearch && matchesType && matchesRegion;
    });

    renderPets(filteredPets);
}

// Função para abrir detalhes do animal
function openPetDetail(petId) {
    const pet = petsData.find(p => p.id === petId);
    if (!pet) return;

    currentPetId = petId;

    document.getElementById('modalPetImage').src = pet.image;
    document.getElementById('modalPetName').textContent = pet.name;
    document.getElementById('modalPetType').textContent = pet.type;
    document.getElementById('modalPetBreed').textContent = pet.breed;
    document.getElementById('modalPetAge').textContent = pet.age;
    document.getElementById('modalPetWeight').textContent = pet.weight;
    document.getElementById('modalPetRegion').textContent = pet.region;
    document.getElementById('modalPetDescription').textContent = pet.description;

    petModal.classList.add('active');
}

// Função para abrir formulário de adoção
function openAdoptionForm() {
    const pet = petsData.find(p => p.id === currentPetId);
    if (!pet) return;

    document.getElementById('adoptPetName').textContent = pet.name;
    petModal.classList.remove('active');
    adoptionModal.classList.add('active');
    
    // Limpar formulário
    adoptionForm.reset();
    document.getElementById('successMessage').style.display = 'none';
    adoptionForm.style.display = 'flex';
}

// Função para fechar modal de adoção
function closeAdoptionModal() {
    adoptionModal.classList.remove('active');
}

// Função para enviar formulário
async function handleFormSubmit(e) {
    e.preventDefault();

    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const videoFile = document.getElementById('videoFile').files[0];

    // Validação básica
    if (!fullName || !email || !phone || !address) {
        alert('Por favor, preencha todos os campos obrigatórios');
        return;
    }

    // Criar FormData para enviar arquivo
    const formData = new FormData();
    formData.append('petId', currentPetId);
    formData.append('fullName', fullName);
    formData.append('email', email);
    formData.append('phone', phone);
    formData.append('address', address);
    if (videoFile) {
        formData.append('videoFile', videoFile);
    }

    try {
        const response = await fetch('/api/submit-adoption', {
            method: 'POST',
            body: formData
        });

        const result = await response.json();

        if (result.success) {
            // Mostrar mensagem de sucesso
            adoptionForm.style.display = 'none';
            document.getElementById('successMessage').style.display = 'block';

            // Fechar modal após 3 segundos
            setTimeout(() => {
                adoptionModal.classList.remove('active');
            }, 3000);
        } else {
            alert('Erro ao enviar candidatura: ' + result.message);
        }
    } catch (error) {
        console.error('Erro:', error);
        alert('Erro ao enviar candidatura. Tente novamente.');
    }
}

// Renderizar animais ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    renderPets(petsData);
});
