// Array chứa các tab và file tương ứng (dễ chỉnh sửa để thêm tab mới)
const tabs = [
    { name: 'Toán', file: 'toan.md' },
    { name: 'Ngữ văn', file: 'van.md' },
    { name: 'Tiếng Anh', file: 'anh.md' },
    { name: 'Công nghệ', file: 'congnghe.md' },
    { name: 'Giáo dục công dân', file: 'gdcd.md' },
    { name: 'Giáo dục thể chất', file: 'gdthechat.md' }
];

// Lấy elements
const tabButtons = document.querySelectorAll('.tab');
const contentDiv = document.getElementById('content');

// Hàm load và render Markdown
async function loadMarkdown(file) {
    try {
        const response = await fetch(`/md/${file}`);
        if (!response.ok) throw new Error('File không tồn tại');
        const markdown = await response.text();
        contentDiv.innerHTML = marked.parse(markdown);
    } catch (error) {
        contentDiv.innerHTML = `<p>Lỗi: Không thể tải nội dung. Kiểm tra file ${file}.</p>`;
    }
}

// Hàm switch tab
function switchTab(selectedButton) {
    // Bỏ active khỏi tất cả tabs
    tabButtons.forEach(btn => btn.classList.remove('active'));
    // Thêm active cho tab được chọn
    selectedButton.classList.add('active');
    // Load file tương ứng
    const file = selectedButton.getAttribute('data-file');
    loadMarkdown(file);
}

// Thêm event listener cho mỗi tab
tabButtons.forEach(button => {
    button.addEventListener('click', () => switchTab(button));
});

// Load tab đầu tiên mặc định (Toán)
document.addEventListener('DOMContentLoaded', () => {
    const firstTab = document.querySelector('.tab.active');
    if (firstTab) switchTab(firstTab);
});