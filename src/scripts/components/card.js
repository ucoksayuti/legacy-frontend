function createCardElement(content) {
    return `
    <a href="/content-detail.html?">
         <div class="card-item">
        <div class="card-img">
            <img id="gambar" src="./images/gambar-konten.png" alt="">
        </div>
        <div class="card-text">
            <h2 id="title">Keanggunan Tari Tor-Tor: Menyibak Keindahan Tradisi Batak</h2>
            <p id="story">Tari Tor-Tor: Keanggunan gerakan sakral yang memukau, menghidupkan kembali sejarah dan spiritualitas budaya Batak, menjadikannya warisan tak ternilai dalam setiap langkah dan irama.</p>
        </div>
    </div>
    </a>

    <a href="/content-detail.html?">
         <div class="card-item">
        <div class="card-img">
            <img id="gambar" src="./images/gambar-konten.png" alt="">
        </div>
        <div class="card-text">
            <h2 id="title">Keanggunan Tari Tor-Tor: Menyibak Keindahan Tradisi Batak</h2>
            <p id="story">Tari Tor-Tor: Keanggunan gerakan sakral yang memukau, menghidupkan kembali sejarah dan spiritualitas budaya Batak, menjadikannya warisan tak ternilai dalam setiap langkah dan irama.</p>
        </div>
    </div>
    </a>
    `;
}

export { createCardElement };
