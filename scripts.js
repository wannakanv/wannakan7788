// ฟังก์ชันสำหรับแสดงข้อความแจ้งเตือนเมื่อคลิกปุ่ม Call to Action
function showAlert() {
    alert('คุณคลิกที่ปุ่ม Call to Action!');
  }
  
  // ฟังก์ชันสำหรับการเปลี่ยนสีของเมนูนำทางเมื่อเลื่อนหน้าเว็บ
  function handleScroll() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
      header.style.backgroundColor = '#0056b3'; // เปลี่ยนสีพื้นหลังของ header
    } else {
      header.style.backgroundColor = '#007bff'; // สีพื้นหลังปกติ
    }
  }
  
  // เพิ่ม Event Listener สำหรับปุ่ม Call to Action
  document.addEventListener('DOMContentLoaded', () => {
    const ctaButton = document.querySelector('.hero button');
    ctaButton.addEventListener('click', showAlert);
  
    // เพิ่ม Event Listener สำหรับการเลื่อนหน้าเว็บ
    window.addEventListener('scroll', handleScroll);
  });
  