function onLoad(){
    initiateColumnC()
    initiateColumnD()
    initiateColumnE()
    initiateColumnF()
}

function initiateColumnC() {
    document.getElementById('c1').value = parseFloat(document.getElementById('b1').value)/1000
    document.getElementById('c2').value = parseFloat(document.getElementById('b2').value)/1000
    document.getElementById('c3').value = parseFloat(document.getElementById('b3').value)/1000
    document.getElementById('c4').value = parseFloat(document.getElementById('b4').value)/1000
    document.getElementById('c5').value = parseFloat(document.getElementById('b5').value)/1000
    document.getElementById('c6').value = parseFloat(document.getElementById('b6').value)/1000
    document.getElementById('c7').value = parseFloat(document.getElementById('b7').value)/1000
    document.getElementById('c8').value = parseFloat(document.getElementById('b8').value)/1000
    document.getElementById('c9').value = parseFloat(document.getElementById('b9').value)/1000
    document.getElementById('c10').value = parseFloat(document.getElementById('b10').value)/1000
    document.getElementById('c11').value = parseFloat(document.getElementById('b11').value)/1000
    document.getElementById('c12').value = parseFloat(document.getElementById('b12').value)/1000
    document.getElementById('c13').value = parseFloat(document.getElementById('b13').value)/1000
    document.getElementById('c14').value = parseFloat(document.getElementById('b14').value)/1000
    document.getElementById('c15').value = parseFloat(document.getElementById('b15').value)/1000
    document.getElementById('c16').value = parseFloat(document.getElementById('b16').value)/1000
    document.getElementById('c17').value = parseFloat(document.getElementById('b17').value)/1000
    document.getElementById('c18').value = parseFloat(document.getElementById('b18').value)/1000
    document.getElementById('c19').value = parseFloat(document.getElementById('b19').value)/1000
    document.getElementById('c20').value = parseFloat(document.getElementById('b20').value)/1000
}

function initiateColumnD() {
    document.getElementById('d1').value = 3600000 * parseFloat(document.getElementById('c1').value)
    document.getElementById('d2').value = 3600000 * parseFloat(document.getElementById('c2').value)
    document.getElementById('d3').value = 3600000 * parseFloat(document.getElementById('c3').value)
    document.getElementById('d4').value = 3600000 * parseFloat(document.getElementById('c4').value)
    document.getElementById('d5').value = 3600000 * parseFloat(document.getElementById('c5').value)
    document.getElementById('d6').value = 3600000 * parseFloat(document.getElementById('c6').value)
    document.getElementById('d7').value = 3600000 * parseFloat(document.getElementById('c7').value)
    document.getElementById('d8').value = 3600000 * parseFloat(document.getElementById('c8').value)
    document.getElementById('d9').value = 3600000 * parseFloat(document.getElementById('c9').value)
    document.getElementById('d10').value = 3600000 * parseFloat(document.getElementById('c10').value)
    document.getElementById('d11').value = 3600000 * parseFloat(document.getElementById('c11').value)
    document.getElementById('d12').value = 3600000 * parseFloat(document.getElementById('c12').value)
    document.getElementById('d13').value = 3600000 * parseFloat(document.getElementById('c13').value)
    document.getElementById('d14').value = 3600000 * parseFloat(document.getElementById('c14').value)
    document.getElementById('d15').value = 3600000 * parseFloat(document.getElementById('c15').value)
    document.getElementById('d16').value = 3600000 * parseFloat(document.getElementById('c16').value)
    document.getElementById('d17').value = 3600000 * parseFloat(document.getElementById('c17').value)
    document.getElementById('d18').value = 3600000 * parseFloat(document.getElementById('c18').value)
    document.getElementById('d19').value = 3600000 * parseFloat(document.getElementById('c19').value)
    document.getElementById('d20').value = 3600000 * parseFloat(document.getElementById('c20').value)
}

function initiateColumnE() {
    document.getElementById('e1').value = parseFloat(document.getElementById('d1').value) / parseFloat(document.getElementById('s1').value)
    document.getElementById('e2').value = parseFloat(document.getElementById('d2').value) / parseFloat(document.getElementById('s1').value)
    document.getElementById('e3').value = parseFloat(document.getElementById('d3').value) / parseFloat(document.getElementById('s1').value)
    document.getElementById('e4').value = parseFloat(document.getElementById('d4').value) / parseFloat(document.getElementById('s1').value)
    document.getElementById('e5').value = parseFloat(document.getElementById('d5').value) / parseFloat(document.getElementById('s1').value)
    document.getElementById('e6').value = parseFloat(document.getElementById('d6').value) / parseFloat(document.getElementById('s1').value)
    document.getElementById('e7').value = parseFloat(document.getElementById('d7').value) / parseFloat(document.getElementById('s1').value)
    document.getElementById('e8').value = parseFloat(document.getElementById('d8').value) / parseFloat(document.getElementById('s1').value)
    document.getElementById('e9').value = parseFloat(document.getElementById('d9').value) / parseFloat(document.getElementById('s1').value)
    document.getElementById('e10').value = parseFloat(document.getElementById('d10').value) / parseFloat(document.getElementById('s1').value)
    document.getElementById('e11').value = parseFloat(document.getElementById('d11').value) / parseFloat(document.getElementById('s1').value)
    document.getElementById('e12').value = parseFloat(document.getElementById('d12').value) / parseFloat(document.getElementById('s1').value)
    document.getElementById('e13').value = parseFloat(document.getElementById('d13').value) / parseFloat(document.getElementById('s1').value)
    document.getElementById('e14').value = parseFloat(document.getElementById('d14').value) / parseFloat(document.getElementById('s1').value)
    document.getElementById('e15').value = parseFloat(document.getElementById('d15').value) / parseFloat(document.getElementById('s1').value)
    document.getElementById('e16').value = parseFloat(document.getElementById('d16').value) / parseFloat(document.getElementById('s1').value)
    document.getElementById('e17').value = parseFloat(document.getElementById('d17').value) / parseFloat(document.getElementById('s1').value)
    document.getElementById('e18').value = parseFloat(document.getElementById('d18').value) / parseFloat(document.getElementById('s1').value)
    document.getElementById('e19').value = parseFloat(document.getElementById('d19').value) / parseFloat(document.getElementById('s1').value)
    document.getElementById('e20').value = parseFloat(document.getElementById('d20').value) / parseFloat(document.getElementById('s1').value)
}

function initiateColumnF() {
    document.getElementById('f1').value = parseFloat(document.getElementById('d1').value) / parseFloat(document.getElementById('s2').value)
    document.getElementById('f2').value = parseFloat(document.getElementById('d2').value) / parseFloat(document.getElementById('s2').value)
    document.getElementById('f3').value = parseFloat(document.getElementById('d3').value) / parseFloat(document.getElementById('s2').value)
    document.getElementById('f4').value = parseFloat(document.getElementById('d4').value) / parseFloat(document.getElementById('s2').value)
    document.getElementById('f5').value = parseFloat(document.getElementById('d5').value) / parseFloat(document.getElementById('s2').value)
    document.getElementById('f6').value = parseFloat(document.getElementById('d6').value) / parseFloat(document.getElementById('s2').value)
    document.getElementById('f7').value = parseFloat(document.getElementById('d7').value) / parseFloat(document.getElementById('s2').value)
    document.getElementById('f8').value = parseFloat(document.getElementById('d8').value) / parseFloat(document.getElementById('s2').value)
    document.getElementById('f9').value = parseFloat(document.getElementById('d9').value) / parseFloat(document.getElementById('s2').value)
    document.getElementById('f10').value = parseFloat(document.getElementById('d10').value) / parseFloat(document.getElementById('s2').value)
    document.getElementById('f11').value = parseFloat(document.getElementById('d11').value) / parseFloat(document.getElementById('s2').value)
    document.getElementById('f12').value = parseFloat(document.getElementById('d12').value) / parseFloat(document.getElementById('s2').value)
    document.getElementById('f13').value = parseFloat(document.getElementById('d13').value) / parseFloat(document.getElementById('s2').value)
    document.getElementById('f14').value = parseFloat(document.getElementById('d14').value) / parseFloat(document.getElementById('s2').value)
    document.getElementById('f15').value = parseFloat(document.getElementById('d15').value) / parseFloat(document.getElementById('s2').value)
    document.getElementById('f16').value = parseFloat(document.getElementById('d16').value) / parseFloat(document.getElementById('s2').value)
    document.getElementById('f17').value = parseFloat(document.getElementById('d17').value) / parseFloat(document.getElementById('s2').value)
    document.getElementById('f18').value = parseFloat(document.getElementById('d18').value) / parseFloat(document.getElementById('s2').value)
    document.getElementById('f19').value = parseFloat(document.getElementById('d19').value) / parseFloat(document.getElementById('s2').value)
    document.getElementById('f20').value = parseFloat(document.getElementById('d20').value) / parseFloat(document.getElementById('s2').value)
}