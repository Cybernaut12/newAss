const elements = document.querySelectorAll('.element');

    elements.forEach(ele => {
      if (ele.innerText.toLowerCase().includes('here')) {
        ele.style.background = 'linear-gradient(to right, #007bff, #0056b3)';  // Blue
        ele.style.color = 'white';
      } else {
        ele.style.backgroundColor = 'black';
        ele.style.color = 'white';
      }
    });