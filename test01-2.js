var webdriver = require("selenium-webdriver"),
    By = webdriver.By,
    until = webdriver.until;


describe('Check the searched items', function() {
  
    
    var driver, x, elements, elem, searchedItem, txt;
    
    
    before(function() {

        driver = new webdriver.Builder()
            .withCapabilities(webdriver.Capabilities.chrome())
            .build();  
        driver.manage().window().maximize();   
        
    });
    

    it('Check search results by search word', function() {
        
        driver.get("https://xn--80ae2aeeogi5fxc.xn--p1ai/").then(function() {
           console.log('Page opened');
            
        }).then(() => {
           return driver.findElement(By.css('#cityInfoCloud  span')).click();
            
        }).then(() => {
           return driver.findElement(By.css('input')).sendKeys('Цитрамон');
            
        }).then(() => {
           return driver.findElement(By.css('#global_search input[type=checkbox]')).click();
            
        }).then(() => {
           return driver.findElement(By.css('#global_search  input[type="submit"]')).click();
           console.log('Get to the search result page');
            
        }).then(() => {
            return  x = driver.findElement(By.css('input.mainfield')).getAttribute('value').then(res =>{
                return searchedItem = res;
            });
            
        }).then(() => {    
           console.log('Searched element is: ' + searchedItem);
            
        }).then(() => {  
            driver.findElements(By.css('div.product_row a span[itemprop="name"]')).then(function(elements){
                elements.map(function(elem){
                    elem.getText().then(function(txt){     
                        //console.log(txt.match(searchedItem));
                            if (txt.search(searchedItem) >= 0) {
                                console.log("Searched element is true");
                            } else {
                                console.log("Searched element is true");
                            };
                    });
                });
            });     
        });
   
    });
    
});