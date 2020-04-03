const request = require("request-promise") // same as axios
const cheerio = require("cheerio")
const fs = require("fs");

/* //lesson 1 single element (H1)
async function main(){
const html = await request.get(
"https://reactnativetutorial.net/css-selectors/"

);
fs.writeFileSync("./test.html",html )
const $ = await cheerio.load(html)
const thetext =$("h1").text();
console.log(thetext)

} */
/*//lesson 2, multiple elements (H1)
async function main(){
    const html = await request.get(
    "https://reactnativetutorial.net/css-selectors/lesson2.html"
    
    );
    fs.writeFileSync("./test.html",html )
    const $ = await cheerio.load(html)
    $("h2").each((index, element) => {
        console.log($(element).text());
    })
    
    }*/
  /*// Lesson 3 selcting using CSS ID (#)
    async function main(){
        const html = await request.get(
        "https://reactnativetutorial.net/css-selectors/lesson3.html"
        
        );
        fs.writeFileSync("./test.html",html )
        const $ = await cheerio.load(html)
        $("#red").each((index, element) => {
            console.log($(element).text());
        })
        
        }*/

       /* //Lesson 4 selecting using CSS class (.)
        async function main(){
            const html = await request.get(
            "https://reactnativetutorial.net/css-selectors/lesson5.html"
            
            );
            fs.writeFileSync("./test.html",html )
            const $ = await cheerio.load(html)
            $(".red").each((index, element) => {
                console.log($(element).text());
            })
        }  */
//Lesson 5 selecting using HTML Attributes ([])
async function main(){
    const html = await request.get(
    "https://reactnativetutorial.net/css-selectors/lesson6.html"
    
    );
    fs.writeFileSync("./test.html",html )
    const $ = await cheerio.load(html)
    $("[data-customer='22293']").each((index, element) => {
        console.log($(element).text());
    })
} 

    

main();
