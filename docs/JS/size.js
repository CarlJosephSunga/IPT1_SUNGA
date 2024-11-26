
            function increaseFontSize() {
                let paragraph = document.getElementById("text");
                let currentSize = parseFloat(window.getComputedStyle(paragraph).fontSize);
                paragraph.style.fontSize = (currentSize + 2) + "px";
            }
    
            function decreaseFontSize() {
                let paragraph = document.getElementById("text");
                let currentSize = parseFloat(window.getComputedStyle(paragraph).fontSize);
                paragraph.style.fontSize = (currentSize - 2) + "px";
            }
      