// script.js

document.querySelector('.save').addEventListener('click', function() {
    const taskInput = document.querySelector('input[type="text"]');
    const taskValue = taskInput.value;

    if (taskValue.trim()) {
        const tbody = document.querySelector('tbody');
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${taskValue}</td>
            <td class="status-pending">Pending</td>
            <td class="actions">
                <button class="edit">✏️ Edit</button>
                <button class="delete">🗑️ Delete</button>
                <button class="check">✔️ Mark Complete</button>
            </td>
        `;
        tbody.appendChild(newRow);
        taskInput.value = ''; // Clear input
    }
});

// Add event delegation for edit, delete, and mark complete buttons
document.querySelector('tbody').addEventListener('click', function(e) {
    if (e.target.classList.contains('delete')) {
        e.target.closest('tr').remove();
    } else if (e.target.classList.contains('check')) {
        const statusCell = e.target.closest('tr').querySelector('td:nth-child(2)');
        statusCell.classList.toggle('status-done');
        statusCell.classList.toggle('status-pending');
        statusCell.textContent = statusCell.classList.contains('status-done') ? 'Done' : 'Pending';
    }
});
