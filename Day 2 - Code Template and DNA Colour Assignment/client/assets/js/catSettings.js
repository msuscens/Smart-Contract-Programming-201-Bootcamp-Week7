
const colors = Object.values(allColors())

const defaultDNA = {
    "headColor" : 10,
    "mouthColor" : 13,
    "eyesColor" : 96,
    "earsColor" : 10,
    //Cattributes
    "eyesShape" : 1,
    "decorationPattern" : 1,
    "decorationMidcolor" : 13,
    "decorationSidescolor" : 13,
    "animation" :  1,
    "lastNum" :  1
    }

// when page load
$( document ).ready(function() {
  $('#dnabody').html(defaultDNA.headColor);
  $('#dnamouth').html(defaultDNA.mouthColor);
  $('#dnaeyes').html(defaultDNA.eyesColor);
  $('#dnaears').html(defaultDNA.earsColor);
  $('#dnashape').html(defaultDNA.eyesShape)
  $('#dnadecoration').html(defaultDNA.decorationPattern)
  $('#dnadecorationMid').html(defaultDNA.decorationMidcolor)
  $('#dnadecorationSides').html(defaultDNA.decorationSidescolor)
  $('#dnaanimation').html(defaultDNA.animation)
  $('#dnaspecial').html(defaultDNA.lastNum)

  renderCat(defaultDNA)
});

function getDna(){
    let dna = ''
    dna += $('#dnabody').html()
    dna += $('#dnamouth').html()
    dna += $('#dnaeyes').html()
    dna += $('#dnaears').html()
    dna += $('#dnashape').html()
    dna += $('#dnadecoration').html()
    dna += $('#dnadecorationMid').html()
    dna += $('#dnadecorationSides').html()
    dna += $('#dnaanimation').html()
    dna += $('#dnaspecial').html()

    return parseInt(dna)
}

function renderCat(dna){
    headColor(colors[dna.headcolor],dna.headColor)
    $('#bodycolor').val(dna.headColor)
    mouthChestTailColor(colors[dna.mouthcolor],dna.mouthColor)
    $('#mouthcolor').val(dna.mouthColor)
    eyesColor(colors[dna.eyescolor],dna.eyesColor)
    $('#eyecolor').val(dna.eyesColor)
    earsPawsColor(colors[dna.earscolor],dna.earsColor)
    $('#earcolor').val(dna.earsColor)
    eyeVariation(dna.eyesShape)
    $('#eyeshape').val(dna.eyesShape)
    decorationVariation(dna.decorationPattern)
    $('#decorativepattern').val(dna.decorationPattern)
    innerDecorationColor(colors[dna.decorationMidcolor],dna.decorationMidcolor)
    $('#innerDecorationColor').val(dna.decorationMidcolor)
    outerDecorationColor(colors[dna.decorationSidescolor],dna.decorationSidescolor)
    $('#outerDecorationColor').val(dna.decorationSidescolor)
}

// Changing cat attributes (colors, eyes, patterns)
$('#bodycolor').change(()=>{
    const colorVal = $('#bodycolor').val()
    headColor(colors[colorVal],colorVal)
})
$('#mouthcolor').change(()=>{
  const colorVal = $('#mouthcolor').val()
  mouthChestTailColor(colors[colorVal],colorVal)
})
$('#eyecolor').change(()=>{
  const colorVal = $('#eyecolor').val()
  eyesColor(colors[colorVal],colorVal)
})
$('#earcolor').change(()=>{
  const colorVal = $('#earcolor').val()
  earsPawsColor(colors[colorVal],colorVal)
})
$('#eyeshape').change(()=>{
  const shape = parseInt($('#eyeshape').val())
  eyeVariation(shape)
})
$('#decorativepattern').change(()=>{
  const pattern = parseInt($('#decorativepattern').val())
  decorationVariation(pattern)
})
$('#innerDecorationColor').change(()=>{
  const colorVal = $('#innerDecorationColor').val()
  innerDecorationColor(colors[colorVal],colorVal)
})
$('#outerDecorationColor').change(()=>{
  const colorVal = $('#outerDecorationColor').val()
  outerDecorationColor(colors[colorVal],colorVal)
})

