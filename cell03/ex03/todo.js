const ftList = document.getElementById('ft_list');
const newBtn = document.getElementById('new_btn');

window.onload = () => {
    const todoCookie = document.cookie.split('; ').find(row => row.startsWith('todo='));
    if (todoCookie) {
        try {
            const tasks = JSON.parse(decodeURIComponent(todoCookie.split('=')[1]));
            tasks.reverse().forEach(task => createTodoElement(task));
        } catch (e) {
            console.error("Cookie format error", e);
        }
    }
};

newBtn.onclick = () => {
    const task = prompt("เพิ่มรายการใหม่:");
    if (task && task.trim() !== "") {
        createTodoElement(task);
        saveCookies();
    }
};

function createTodoElement(text) {
    const div = document.createElement('div');
    div.textContent = text;
    
    div.onclick = () => {
        if (confirm("คุณต้องการลบรายการนี้ใช่หรือไม่?")) {
            div.remove();
            saveCookies();
        }
    };
    
    ftList.insertBefore(div, ftList.firstChild);
}

function saveCookies() {
    const todos = [];
    const items = ftList.querySelectorAll('div');
    
    items.forEach(item => {
        todos.push(item.textContent);
    });
    
    const d = new Date();
    d.setTime(d.getTime() + (24 * 60 * 60 * 1000)); 
    document.cookie = `todo=${encodeURIComponent(JSON.stringify(todos))};expires=${d.toUTCString()};path=/`;
}