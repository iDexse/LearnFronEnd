function Validator(options){

    function getParent(element, selector){
        while(element.parentElement){
            if(element.parentElement.matches(selector)){
                return element.parentElement
            }
            element = element.parentElement;
        }
    }

    let selectorRules = {}
    function Validate(inputElement, rule){
        let errorMessage
        let errorElement = getParent(inputElement, options.formGroupSelector).querySelector(options.errorSelector)
       
        // lấy ra các rule của seletor
        let rules = selectorRules[rule.selector]
       
        // lặp qua từng rule và kiểm tra
        for (let i = 0; i < rules.length; i++) {
            switch(inputElement.type){
                case 'radio':
                case 'checkbox':
                    errorMessage = rules[i](
                        formElement.querySelector(rule.selector + ':checked')
                    )
                    break;
                default:
                    errorMessage = rules[i](inputElement.value);
            }
            if(errorMessage) break;
        }
        if(errorMessage){
            errorElement.innerHTML = errorMessage
            getParent(inputElement, options.formGroupSelector).classList.add('invalid');
        }else{
            errorElement.innerHTML = ''
            getParent(inputElement, options.formGroupSelector).classList.remove('invalid')
        }

        return !errorMessage
    }

    let formElement = document.querySelector(options.form);
    if(formElement) {
        formElement.onsubmit = function(e){
            e.preventDefault();

            let isValid = true;

            options.rules.forEach((rule) =>{
                let inputElement = formElement.querySelector(rule.selector);
                let valid = Validate(inputElement, rule);
                if(!valid){
                    isValid = false;
                }
            })
            if(isValid){
                if(typeof options.onSubmit === 'function') {
                    let enableInput = formElement.querySelectorAll('[name]:not([disabled])');
            
                    var formValue = Array.from(enableInput).reduce(function(values, input){
                        switch (input.type){
                            case 'radio':
                                values[input.name] = formElement.querySelector('input[name="'+ input.name + '"]:checked').value;
                                break;
                            case 'checkbox':
                               if(!input.matches(':checked')) return values
                               if(!Array.isArray(values[input.name])){
                                    values[input.name] = [];
                               }
                               values[input.name].push(input.value);
                                break;
                            case 'file':
                                values[input.name] = input.files;
                                break;
                            default:
                                values[input.name] = input.value
                        }
                        return values;
                    }, {})
                    options.onSubmit(formValue);
                }
                // trường hợp xử lý không có onSubmit và muốn hành vi submit là mặc định
                else{
                    formElement.submit()
                }
            }
        }
        // xử lý mỗi rules
        options.rules.forEach((rule) => {
            // selectorRules[rule.selector] = rule.test;
            if(Array.isArray(selectorRules[rule.selector])){
                selectorRules[rule.selector].push(rule.test);
            }else {
                selectorRules[rule.selector] = [rule.test];
            }
            

            let inputElements = formElement.querySelectorAll(rule.selector);
            Array.from(inputElements).forEach(function(inputElement) {
                // xử lý trường hợp blur khỏi input
                inputElement.onblur = function(){
                    Validate(inputElement, rule)
                }

                inputElement.oninput = function(){
                    let errorElement = getParent(inputElement, options.formGroupSelector).querySelector(options.errorSelector);

                    errorElement.innerHTML = ''
                    getParent(inputElement, options.formGroupSelector).classList.remove('invalid')
                }
            })
            
        });
    }   
}

Validator.isRequired = function(selector){
    return {
        selector: selector,
        test(value){
            return value ? undefined : 'Vui lòng nhập trường này'
        }
    }
}

Validator.isEmail = function(selector, message){
    return {
        selector: selector,
        test(value){
            let regrex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regrex.test(value) ? undefined : message || 'Vui lòng nhập email'
        }
    }
}

Validator.minLength = function(selector, min, message){
    return {
        selector: selector,
        test(value){
            return value.length >= min ? undefined : message || `Vui lòng nhập tối thiểu ${min} kí tự`
        }
    }
}

Validator.isComfirmed = function(selector, getComfirmValue, message){
    return {
        selector: selector,
        test(value){
            return value === getComfirmValue() ? undefined : message || 'Giá trị nhập vào không chính xác'
        }
    }
}