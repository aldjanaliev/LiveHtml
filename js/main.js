// ================ modals ===============
let modalLogin = document.querySelector('#form_login')
let modalLoginBtn = document.querySelector('#btn_login')
let modalSign = document.querySelector('#form_sign')
let modalSignBtn = document.querySelector('#btn_sign')
let modalCloseBtn = document.querySelectorAll('.modal_close')
modalLoginBtn.onclick = function (){
	modalLogin.style.display = "block"
}
modalSignBtn.onclick = function (){
	modalSign.style.display = "block"
}
modalCloseBtn.onclick = function(){
	console.log("ass")
}
let close = function(){
	modalCloseBtn.forEach(item => {
		item.addEventListener('click', closeModal)
	})
	function closeModal(){
		modalSign.style.display = "none"
		modalLogin.style.display = "none"
		repeatPass.style.display = "none"
	}
}
close()

// ============== simple validate ============
let passValFirst = modalSign.querySelectorAll('.form_input__pass')[0]
let passValSecond = modalSign.querySelectorAll('.form_input__pass')[1]
let signBtn = modalSign.querySelector('.head_btn--sign')
let repeatPass = modalSign.querySelector('#repeat-pass')
signBtn.onclick = function () {
	if(passValFirst.value !== passValSecond.value || passValFirst.value == ''){
		repeatPass.style.display = "inline"
	} else {
		repeatPass.style.display = "none"
		modalSign.style.display = "none"
	}
}

let loginInput = modalLogin.querySelectorAll('.form_input')
let loginBtn = modalLogin.querySelector('.head_btn--login')
loginBtn.onclick = function () {
	if(loginInput[0].value !== '' && loginInput[1].value !== ''){
		modalLogin.style.display = "none"
	}
}

// ============ change - city ===============
let changeCityBtn = document.querySelector('#change-city_btn')
let changeCityList = document.querySelector('#change-city_list')
changeCityBtn.onclick = () => {
	changeCityList.classList.toggle("city_list__active")
}
document.addEventListener('click', function(e) {
  if (e.target.id !== 'change-city_btn') {
    changeCityList.classList.remove("city_list__active")
  }
})

let choosedCity = document.querySelector('#choosed-city')
let selectCity = document.querySelectorAll('.choosed_city')
let changeCityName = function(){
	selectCity.forEach(item => {
		item.addEventListener('click', changeName)
	})
	function changeName() {
		[this.textContent, choosedCity.textContent] = [choosedCity.textContent, this.textContent]
	}
}
changeCityName()

// ============ search btn ============
let searchBtn = document.querySelector('#search_btn')
let searchIn = document.querySelector('#search_in')
searchBtn.onclick = () =>	searchIn.classList.toggle("search_in__active")

// =============== tabs =============
let tab = function(){
	let tabBtn = document.querySelectorAll('.tab_item')
	tabBtn.forEach(item => {
		item.addEventListener('click', selectTab)
	})
	function selectTab() {
		tabBtn.forEach(item => {
			item.classList.remove('tab_item__active')
		})
		this.classList.add('tab_item__active')
	}
}
tab()