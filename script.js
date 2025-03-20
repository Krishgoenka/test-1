document.addEventListener("DOMContentLoaded", function () {
    const rankings = [
        { name: "Student A", attendance: 90, participation: 80, project: 100 },
        { name: "Student B", attendance: 85, participation: 75, project: 90 },
        { name: "Student C", attendance: 80, participation: 70, project: 50 },
        { name: "Student D", attendance: 75, participation: 60, project: 70 },
        { name: "Student E", attendance: 70, participation: 50, project: 30 }
    ];

    rankings.forEach(student => {
        student.total = (student.attendance * 0.4) + 
                        (student.participation * 0.3) + 
                        ((student.project / 100) * 30);
    });

    rankings.sort((a, b) => b.total - a.total);

    const tableBody = document.getElementById("ranking-table");
    
    rankings.forEach((student, index) => {
        let row = `<tr>
                        <td>${index + 1}</td>
                        <td>${student.name}</td>
                        <td>${student.attendance}%</td>
                        <td>${student.participation}%</td>
                        <td>${student.project}/100</td>
                        <td>${student.total.toFixed(2)}</td>
                   </tr>`;
        tableBody.innerHTML += row;
    });
});
