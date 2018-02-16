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
    
    
    it('Check search results by number of elements', function(){
        
        driver.get("https://xn--80ae2aeeogi5fxc.xn--p1ai/").then(function() {
            console.log('Page opened');
            
        }).then(() => {
           return driver.findElement(By.css('#cityInfoCloud > span')).click();
              
        }).then(() => {
           return driver.findElement(By.css('input')).sendKeys('Цитрамон');
            
        }).then(() => {
           return driver.findElement(By.css('#global_search input[type=checkbox]')).click();
            
        }).then(() => {
           return driver.findElement(By.css('#global_search > input[type="submit"]')).click();
           console.log('Get to the search result page');
            
        }).then(() => {
            return  x = driver.findElement(By.css('div.filter_info_main p strong'));
            
        }).then(() => {    
            return  x = x.getText().then(res =>{
                return validNumberOfItems = res;
            });
                
        }).then(() => {    
                console.log('Number of elements that should be displayed: ' + validNumberOfItems);
            
        }).then(() => {    
            return y = driver.findElement(By.css('div.product_row:last-child'));
            
        }).then(() => {   
            return y = y.getAttribute('data-position').then(res =>{
                return validIdItems = res;
            });
                
        }).then(() => {     
                console.log('Number of elements in search results: ' + validIdItems);
            
        }).then(() => { 
            if (validIdItems == validNumberOfItems) {
                
            console.log("Number of elemnts are equal");  
            
            } else {
              
            console.log("Number of elemnts are not equal");
                
            };
        });
    });
    
    
});
    

    
        
