var webdriver = require("selenium-webdriver"),
    By = webdriver.By,
    until = webdriver.until;

describe('Check the searched items', function() {

    var num, dataId, x, y;


       before(function() {

         driver = new webdriver.Builder()
             .withCapabilities(webdriver.Capabilities.chrome())
             .build();
         driver.manage().window().maximize();

       });

       it('Check search results by data-category', function() {

          driver.get("https://xn--80ae2aeeogi5fxc.xn--p1ai/").then(function(){

            return driver.findElement(By.css('#cityInfoCloud > span')).click();
          }).then(function(){

            return driver.findElement(By.css('input')).sendKeys('rewrwetrwttwet');
          }).then(function(){

            return driver.findElement(By.css('#global_search > input[type="submit"]')).click();
          }).then(function(){

            return driver.findElement(By.css('#order-form'));
          }).then(function(){
            console.log("Form exists");
            return driver.findElement(By.css('#order-form > div')).getText().then(function(txt){
            console.log("Header title: " + txt);
            });
          }).then(function(){

            console.log("Fill the form - Название товара: ");
            return driver.findElement(By.css('td:nth-child(2) > input')).clear().then(function(){
              return driver.findElement(By.css('td:nth-child(2) > input')).sendKeys('rewrwetrwttwet').then(function(){
              console.log("From filled - Название товара");
              });
            });
          }).then(function(){
            console.log("Fill the form - Количество:");
            return driver.findElement(By.css('td:nth-child(2) > span > input')).clear().then(function(){
              return driver.findElement(By.css('td:nth-child(2) > span > input')).sendKeys('5').then(function(){
              console.log("From filled - Количество");
              });
            });
          }).then(function(){
            console.log("Fill the form - Ваше имя: ");
            return driver.findElement(By.css('#name')).clear().then(function(){
              return driver.findElement(By.css('#name')).sendKeys('Дмитрий').then(function(){
              console.log("From filled - Ваше имя");
              });
            });
          }).then(function(){
            console.log("Fill the form - Номер телефона: ");
            return driver.findElement(By.css('#phone')).clear().then(function(){
              return driver.findElement(By.css('#phone')).sendKeys('1').then(function(){
                return driver.sleep(100).then(function(){
                  return driver.findElement(By.css('#phone')).sendKeys('2').then(function(){
                    return driver.sleep(100).then(function(){
                      return driver.findElement(By.css('#phone')).sendKeys('3').then(function(){
                        return driver.sleep(100).then(function(){
                          return driver.findElement(By.css('#phone')).sendKeys('4').then(function(){
                            return driver.sleep(100).then(function(){
                              return driver.findElement(By.css('#phone')).sendKeys('5').then(function(){
                                return driver.sleep(100).then(function(){
                                  return driver.findElement(By.css('#phone')).sendKeys('6').then(function(){
                                    return driver.sleep(100).then(function(){
                                      return driver.findElement(By.css('#phone')).sendKeys('8').then(function(){
                                        return driver.sleep(100).then(function(){
                                          return driver.findElement(By.css('#phone')).sendKeys('8').then(function(){
                                            return driver.sleep(100).then(function(){
                                              return driver.findElement(By.css('#phone')).sendKeys('9').then(function(){
                                                return driver.sleep(100).then(function(){
                                                  return driver.findElement(By.css('#phone')).sendKeys('9').then(function(){
                                                      console.log("From filled - Номер телефона");
                                                  });
                                                });
                                              });
                                            });
                                          });
                                        });
                                      });
                                    });
                                  });
                                });
                              });
                            });
                          });
                        });
                      });
                    });
                  });
                });
              });
            });
          }).then(function(){

            console.log("Fill the form - Эл. адрес: ");
            return driver.findElement(By.css('#email')).clear().then(function(){
              return driver.findElement(By.css('#email')).sendKeys('example@beep.boop').then(function(){
              console.log("From filled - Эл. адрес");
              });
            });
          }).then(function(){
            console.log("Fill the form - Примечание: ");
            return driver.findElement(By.css('#comment')).clear().then(function(){
              return driver.findElement(By.css('#comment')).sendKeys('Привезите, пожалуйста, как можно быстрее!').then(function(){
              console.log("From filled - Примечание:");
              });
            });
          }).then(function(){
          /*  console.log("All form strings are exists");
            return driver.findElements(By.css('tr td')).then(function(elements){
              return elements.map(function(elem){
                return elem.getText().then(function(txt){
                  console.log("String exist: " + txt);
                });
              });
            }); */
          }).then(function(){


            return driver.findElement(By.css('#order-form > form > div.center > button')).click().then(function() {
               console.log("Form sended");
            });

          });

      });

  });
