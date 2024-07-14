const form = document.getElementById('registrationForm');
    const modal = document.getElementById('modal');
    const modalMessage = document.getElementById('modalMessage');

    const validateEmail = (email) => {
      const emailPattern = /^[a-zA-Z0-9._%+-]+@sode-edu\.in$/;
      return emailPattern.test(email);
    };

    const validateUSN = (usn) => {
        const usnPattern = /^4(mw|MW)2[0-9](cs|CS)\d{3}$/;
      return usnPattern.test(usn);
    };

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const formData = new FormData(form);

      if (!validateEmail(formData.get('email'))) {
        showModal('Invalid email format. Please use abc@sode-edu.in');
        return;
      }

      if (!validateUSN(formData.get('usn'))) {
        showModal('Invalid USN format. Please use 4mw2Xcs000 format.');
        return;
      }

      try {
        const response = await fetch('https://workshop-frgm.onrender.com/api/form', {
          method: 'POST',
          body: JSON.stringify(Object.fromEntries(formData)),
          headers: {
            'Content-Type': 'application/json'
          }
        });
        const result = await response.json();
        showModal(result.msg);
        form.reset();
      } catch (error) {
        showModal('Error saving data. Please try again.');
      }
    });

    const showModal = (message) => {
      modalMessage.textContent = message;
      modal.classList.add('active');
    };

    const closeModal = () => {
      modal.classList.remove('active');
    };


document.getElementById('second').addEventListener('click', function() {
    // alert('sjdh')
    document.getElementById('page4').scrollIntoView({ behavior: 'smooth' });
});
document.getElementById('fsecond').addEventListener('click', function() {
    // alert('sjdh')
    document.getElementById('page4').scrollIntoView({ behavior: 'smooth' });
});

function gotoo(){
    document.getElementById('page4').scrollIntoView({ behavior: 'smooth' });

}