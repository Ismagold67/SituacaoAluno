let res = document.getElementById('res')
let res2 = document.getElementById('res2')


function situacao() {
    var student = window.prompt('Qual o nome do aluno?')
    var note1 = window.prompt(`Primeira nota de ${student}:`).replace(',','.')
    var note2 = window.prompt(`Segunda nota de ${student}:`).replace(',','.')
    var note11 = Number(note1)
    var note22 = Number(note2)
    var media = (note11 + note22) / 2
    res.innerHTML = ''

    if(student == 0) {
        window.alert('É preciso iniciar com o nome do aluno!!')
    }

        if( media <= 3) {
            var table = document.createElement("table");
            var thead = document.createElement("thead");
            var tbody = document.createElement("tbody");
      
             table.appendChild(thead);
             table.appendChild(tbody);
      
             document.getElementById('res').appendChild(table);

            res2.innerHTML = `<br>Aluno: ${student}</br>`
            res2.innerHTML += `<br>1° Nota: ${(note11).toFixed(2).replace('.',',')}</br>`
            res2.innerHTML += `<br>2° Nota: ${(note22).toFixed(2).replace('.',',')}</br>`
            res2.innerHTML += `<br>Média: ${(media).toFixed(2).replace('.',',')}</br>`
      
             let test = document.createElement('tr');
             let test1 = document.createElement('th')
             test1.innerHTML = "Média";
             let test2 = document.createElement('th');
             test2.innerHTML = "Situação";
      
             test.appendChild(test1);
             test.appendChild(test2);
             thead.appendChild(test)
      
             let linha2 = document.createElement('tr');
             let linha3 = document.createElement('th')
             linha3.innerHTML = `Abaixo de 3,0`;
             let linha4 = document.createElement('th');
             linha4.innerHTML = `Reprovado`;
      
             linha2.appendChild(linha3);
             linha2.appendChild(linha4);
             tbody.appendChild(linha2)
        } else if(media > 5) {
            var table = document.createElement("table");
            var thead = document.createElement("thead");
            var tbody = document.createElement("tbody");

            table.appendChild(thead);
            table.appendChild(tbody);
     
            document.getElementById('res').appendChild(table);

            res2.innerHTML = `<br>Aluno: ${student}</br>`
            res2.innerHTML += `<br>1° Nota: ${(note11).toFixed(2).replace('.',',')}</br>`
            res2.innerHTML += `<br>2° Nota: ${(note22).toFixed(2).replace('.',',')}</br>`
            res2.innerHTML += `<br>Média: ${(media).toFixed(2).replace('.',',')}</br>`
     
            let test = document.createElement('tr');
            let test1 = document.createElement('th')
            test1.innerHTML = "Média";
            let test2 = document.createElement('th');
            test2.innerHTML = "Situação";
     
            test.appendChild(test1);
            test.appendChild(test2);
            thead.appendChild(test)
     
            let linha2 = document.createElement('tr');
            let linha3 = document.createElement('th')
            linha3.innerHTML = `Acima de 6,0`;
            let linha4 = document.createElement('th');
            linha4.innerHTML = `Aprovado`;
     
            linha2.appendChild(linha3);
            linha2.appendChild(linha4);
            tbody.appendChild(linha2)
            

        } else {
            var table = document.createElement("table");
            var thead = document.createElement("thead");
            var tbody = document.createElement("tbody");

            table.appendChild(thead);
            table.appendChild(tbody);
     
            document.getElementById('res').appendChild(table);

            res2.innerHTML = `<br>Aluno: ${student}</br>`
            res2.innerHTML += `<br>1° Nota: ${(note11).toFixed(2).replace('.',',')}</br>`
            res2.innerHTML += `<br>2° Nota: ${(note22).toFixed(2).replace('.',',')}</br>`
            res2.innerHTML += `<br>Média: ${(media).toFixed(2).replace('.',',')}</br>`
     
            let test = document.createElement('tr');
            let test1 = document.createElement('th')
            test1.innerHTML = ` <span style="background-color: white;">Média</span>`;
            let test2 = document.createElement('th');
            test2.innerHTML = "Situação";
     
            test.appendChild(test1);
            test.appendChild(test2);
            thead.appendChild(test)
     
            let linha2 = document.createElement('tr');
            let linha3 = document.createElement('th')
            linha3.innerHTML = `Entre 3,0 e 6,0`;
            let linha4 = document.createElement('th');
            linha4.innerHTML = `Recuperação`;
     
            linha2.appendChild(linha3);
            linha2.appendChild(linha4);
            tbody.appendChild(linha2)
        }


    
}