 let inputs = document.querySelectorAll('.connection__input-file');
    Array.prototype.forEach.call(inputs, function (input) {
      let label = input.nextElementSibling,
        labelVal = label.querySelector('.connection__file-text').innerText;
  
      input.addEventListener('change', function (e) {
        let countFiles = '';
        if (this.files && this.files.length >= 1)
          countFiles = this.files.length;
        /*let nameFiles = this.files[0].name;*/
         
  
        if (countFiles)
          label.querySelector('.connection__file-text').innerText = 'Выбрано файлов: ' + countFiles;
        else
          label.querySelector('.connection__file-text').innerText = labelVal;
      });
    });