const elements = document.querySelectorAll('.element');

    elements.forEach(element => {
      if (element.innerText.toLowerCase().includes('here')) {
        element.style.background = 'linear-gradient(to right, #007bff, #0056b3)';  
        element.style.color = 'white';
      } else {
        element.style.backgroundColor = 'black';
        element.style.color = 'white';
      }
    });
