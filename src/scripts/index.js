import 'regenerator-runtime';
import '../styles/main.css';
import '../styles/responsive.css';
import '../scripts/components/storyPage.js';

import './components/storyPage.js';

import { footerElemen } from './components/footer';
import { navbarElement } from './components/navbar';
import { createCardElement } from './components/card';
import loadDetail from './views/loadDetail.js';
import initSlider from './views/initSlider.js';

// Mengatur elemen footer dan navbar
const footerContainer = document.querySelector('#footer');
if (footerContainer) {
    footerContainer.innerHTML = footerElemen;
}

const navbarContainer = document.querySelector('#header');
if (navbarContainer) {
    navbarContainer.innerHTML = navbarElement;
}

// Fungsi untuk mengecek apakah user sudah login
function checkLoginStatus() {
    const token = localStorage.getItem('token');
    if (token) {
        // Decode the token to get user email (this is a simple example, consider using a library like jwt-decode)
        const userEmail = localStorage.getItem('email');
        const navbarProfile = document.getElementById('navbar-profile');
        if (navbarProfile) {
            const newEmail = userEmail.split('@')[0];
            navbarProfile.innerHTML = `<p>${newEmail}</p><button class="btn-auth" id="logoutButton">Logout</button>`;
            document.getElementById('logoutButton').addEventListener('click', handleLogout);
        }
    } else {
        const loginButton = document.getElementById('loginButton');
        if (loginButton) {
            loginButton.addEventListener('click', () => {
                window.location.href = '/login.html';
            });
        }
    }
}

// Fungsi untuk logout
function handleLogout() {
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    window.location.href = '/';
}

// Panggil fungsi checkLoginStatus saat halaman dimuat
checkLoginStatus();

// Logika untuk halaman history.html
async function fetchData(query = '') {
    try {
        const response = await fetch('http://localhost:5000/content');
        const contents = await response.json();

        const container = document.getElementById('main-content');
        if (container) {
            container.innerHTML = '';

            // Filter contents based on the search query
            const filteredContents = contents.filter(content =>
                content.title.toLowerCase().includes(query.toLowerCase())
            );

            // Reverse the order of contents
            const reversedContents = filteredContents.reverse();

            reversedContents.forEach(content => {
                const cardHTML = createCardElement(content);
                const card = document.createElement('div');
                card.innerHTML = cardHTML;

                // Tambahkan event listener untuk card
                card.querySelector('a').addEventListener('click', (event) => {
                    event.preventDefault();
                    window.location.href = `/content-detail.html?_id=${content._id}`;
                });

                container.appendChild(card);

            });
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

if (document.querySelector('.btn-search') && document.querySelector('#search-input')) {
    const searchButton = document.querySelector('.btn-search');
    const searchInput = document.querySelector('#search-input');

    searchButton.addEventListener('click', () => {
        const query = searchInput.value;
        fetchData(query);
    });
}

// logic ambil data buat page content-detail

async function fetchContentDetail(id) {
    try {
        const response = await fetch(`http://localhost:5000/content/${id}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const content = await response.json();
        return content;
    } catch (error) {
        console.error('Error fetching content detail:', error);
    }
}

function getQueryParams() {
    const params = new URLSearchParams(window.location.search);
    return {
        _id: params.get('_id')
    };
}

document.addEventListener('DOMContentLoaded', async () => {
    const { _id } = getQueryParams();
    if (_id) {
        const content = await fetchContentDetail(_id);
        if (content) {
            loadDetail(content); 
            initSlider(); 
        }
    } else {
        fetchData(); 
    }
});

// panggil logic load halaman conten-detail
loadDetail(content);

// panggil logic slider
initSlider();

// push data user saat register
async function handleSignup(event) {
    event.preventDefault();

    const form = document.getElementById('signupForm');
    const formData = new FormData(form);

    const data = {
        email: formData.get('email'),
        password: formData.get('password'),
        confirm_password: formData.get('confirm_password')
    };

    try {
        const response = await fetch('http://localhost:5000/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            alert('Berhasil membuat akun, silahkan login!');
            window.location.href = '/login.html';
        } else {
            const errorData = await response.json();
            alert(`Gagal membuat akun: ${errorData.message}`);
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Terjadi kesalahan saat membuat akun.');
    }
}

document.getElementById('signupForm').addEventListener('submit', handleSignup);
