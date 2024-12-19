// Toggle Navbar
const hamburger = document.getElementById('hamburger');
const nav = document.querySelector('.nav-container ul');

hamburger.addEventListener('click', () => {
    nav.classList.toggle('show');
});

// Copy Referral Link
function copyReferralLink() {
    const referralInput = document.getElementById('referral-link');
    referralInput.select();
    document.execCommand('copy');
    const message = document.getElementById('copy-message');
    message.textContent = "Referral link copied!";
    setTimeout(() => (message.textContent = ""), 3000);
}
