var slider = document.getElementById("period");
var output = document.getElementById("demo");
output.innerHTML = slider.value;
slider.oninput = function () {
    output.innerHTML = this.value
}

! function ($) {
    var principle = $('#principle'),   //1
    contribution = $('#contribution'),  //2
    period = $('#period'),  //3
    frequency = 30,
    interest = 5,
    result = $('#calc-result'),
    inputs = $('input, select'),
    fv = function () {
        //console.log('p = '+principle.val()+', contribution = '+contribution.val()+', period = '+period.val());
        var r = parseFloat(interest) / 100 / 30,
            C = parseFloat(contribution.val()),
            P = parseFloat(principle.val()),
            y = parseFloat(period.val()),
            d = 30 * y//d = 365 * y,
            n = parseFloat(frequency),
            total = P + C,
            ri = 0;
            count = 0,
            initialDeposit = !0;

        while (count++ < d) {
            ri += total * r
            if (count % n === 0) {
                if (!initialDeposit) {
                    total += C
                } else {
                    initialDeposit = !1
                }
                total += ri;
                ri = 0
            }
        }
        return total
    },
    update = function () {
        var val = fv();
        if( !Number.isNaN(val) ){
            result.html('€'+val.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
            $('#month2').html( period.val() )
        }else{
            result.html('0')
        }
    };
    update();
    inputs.on('change keyup', update)
}(jQuery)



var buttons = document.querySelectorAll('[data-counter]');
for (var i = 0; i < buttons.length; i++) {
    var button = buttons[i];
    button.addEventListener('click', function () {
        var field = document.querySelector('[name="' + this.dataset.field + '"]'),
        action = this.dataset.counter;

        if (field) {
            updateValue(field, action);
        }
    });
}

function updateValue(element, action) {
    var min = parseFloat(element.getAttribute('min')),
        max = parseFloat(element.getAttribute('max')),
        step = parseFloat(element.getAttribute('step')) || 1,
        oldValue = element.dataset.value || element.defaultValue || 0,
        newValue = parseFloat(element.value.replace(/\$/, ''));

        //console.log('min = '+min+', max = '+max+', step = '+step+', oldValue = '+oldValue);

    if (isNaN(parseFloat(newValue))) {
        newValue = oldValue;
    } else {
        if (action == 'add') {
            newValue += step;
        } else if (action == 'sub') {
            newValue -= step;
        }

        newValue = newValue < min ? min : newValue > max ? max : newValue;
    }

    element.dataset.value = newValue;
    element.value = (element.dataset.prepend || '') + newValue + (element.dataset.append || '');

    //updateChart();
}
//var buttons = document.querySelectorAll('[data-counter]');
//    for (var i = 0; i < buttons.length; i++) {
//        var button = buttons[i];
//        console.log('clicked')
//        
//    }