function Validator(formSelector) {
  'use strict'
  let formRules = {};
  function getParent(current, select) {
    let _parent = current.parentElement;
    while (_parent) {
      if (_parent.matches(select)) {
        return _parent;
      }
      _parent = _parent.parentElement;
    }
  }
  const formElements = document.querySelector(formSelector);
  let validatorRules = {
    required: (value) => (value ? undefined : " * required"),
    email: (value) => {
      const regex =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      return regex.test(value)
        ? undefined
        : "please enter a valid E-mail Address";
    },
    min: (min) => {
      return function (value) {
        return value.length >= min
          ? undefined
          : `Please enter at least ${min} numbers`;
      };
    },
    max: function (max) {
      return function (value) {
        return value.length <= max
          ? undefined
          : `Please enter at most ${max} numbers`;
      };
    },
  };
  if (formElements) {
    const inputs = formElements.querySelectorAll("[name],[rules]");
    for (let input of inputs) {
      let rules = input.getAttribute("rules").split("|");
      input.onblur = handleValidate;
      input.onclick = handleClear;
      for (let rule of rules) {
        let ruleElement;
        let ruleNeedValue = rule.includes(":");
        if (ruleNeedValue) {
          ruleElement = rule.split(":");
          rule = ruleElement[0];
        }
        let newValidatorRules = validatorRules[rule];
        if (ruleNeedValue) {
          newValidatorRules = newValidatorRules(ruleElement[1]);
        }
        // Tach xong rules
        if (Array.isArray(formRules[input.name])) {
          formRules[input.name].push(newValidatorRules);
          console.log(formRules[input.name]);
        } else {
          formRules[input.name] = [newValidatorRules];
        }
      }
    }
    // event
    function handleValidate(e) {
      let valueInput = e.target.value;
      let _rules = formRules[e.target.name];
      let errorMassages;
      for (let _rule of _rules) {
        errorMassages = _rule(valueInput);
        if (errorMassages) {
          break;
        }
      }
      if (errorMassages) {
        let formGroup = getParent(e.target, ".form-group");
        if (formGroup) {
          let formMassage = formGroup.querySelector(".form-massage");
          formGroup.classList.add("ivalid");
          if (formMassage) {
            formMassage.innerText = errorMassages;
          }
        }
      }
      return (errorMassages );
    }
    screen.prev;
    function handleClear(e) {
      let formGroup = getParent(e.target, ".form-group");
      console.log(e.target.parentElement)
      if (formGroup.classList.contains("ivalid")) {
        formGroup.classList.remove("ivalid");
      }
      let formMassage = formGroup.querySelector(".form-massage");
      formMassage.innerText = "";
    }
    formElements.onsubmit =  (e) => {
      e.preventDefault();
      const inputs = formElements.querySelectorAll("[name],[rules]");
      let checks = true;
      for (let input of inputs) {
        if (
          handleValidate({
            target: input,
          })
        ) { 
          checks = false;
        }
        
      }
      if(checks){
        formElements.submit()
        this.onSubmit ? this.onSubmit(): formElements.submit 
      }
      console.log(checks);
    };
    
  }
  console.log(formRules);
}
