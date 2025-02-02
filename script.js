// คำนวณอายุจากวันเกิดที่กรอก
// calculateAge(birthdate): ฟังก์ชันนี้รับวันเกิดที่ผู้ใช้กรอกแล้วคำนวณอายุโดยใช้ Date ของ JavaScript
function calculateAge(birthdate) {
    const today = new Date();
    const birthDate = new Date(birthdate);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    // ใช้ today.getFullYear() เพื่อดึงปีปัจจุบัน
    // หากยังไม่ถึงวันเกิดในปีนี้
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    return age;
}

// เมื่อผู้ใช้กรอกวันเกิดและกดปุ่ม Calculate Age
// document.getElementById('ageForm').addEventListener(...): กำหนดการทำงานเมื่อผู้ใช้กดปุ่ม "Calculate Age"
// เมื่อผู้ใช้กรอกวันเกิดแล้วกดปุ่มฟอร์ม จะไม่ทำการรีเฟรชหน้าเว็บ (ใช้ event.preventDefault()).
// จากนั้นคำนวณอายุแล้วแสดงผลลัพธ์ใน div#result
document.getElementById('ageForm').addEventListener('submit', function(event) {
    event.preventDefault();  // ห้ามฟอร์มรีเฟรชหน้าเว็บ

    const birthdate = document.getElementById('birthdate').value;
    const age = calculateAge(birthdate);

    // แสดงผลลัพธ์
    document.getElementById('ageMessage').textContent = `You are ${age} years old.`;
    document.getElementById('result').classList.remove('hidden');
});