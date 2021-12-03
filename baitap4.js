arr = [];

function showUsers() {
  const valueName = document.getElementById('name').value.trim();
  const valuePhone = document.getElementById('phone').value;
  const valueAddress = document.getElementById('address').value;
  const valueId = (Math.floor(Math.random() * 1000) + 1);
  

  console.log(valueName, valuePhone, valueAddress, valueId);

  if (!valueName || valueName.length <=5 ) {
    return (document.getElementById('name-error')).innerHTML = "vui long nhap lai ten"
  }
  if (!valuePhone) {
    return (document.getElementById('phone-error')).innerHTML = "vui long nhap so"
  }


  if (!valueAddress) {
    return (document.getElementById('address-error')).innerHTML = "vui long nhap lai dia chi"
  }


  listUser = {
    valueName: valueName,
    valuePhone: valuePhone,
    valueAddress: valueAddress,
    valueId: valueId,
  }

  arr = [...arr, listUser];
  console.log("listUser", listUser);

  let user = '';
  for (const task of arr) {
    userlist = `<p> ${task.valueName} </p>` + `<p> ${task.valuePhone} </p>` + `<p> ${task.valueAddress} </p>` + `<p> ${task.valueId} </p>`;
    user = user + userlist;
    document.querySelector('#showListUsers').innerHTML = user;
  }
}



document.getElementById('showUsers').onclick = showUsers;

document.getElementById("name").onfocus = () => {
  document.getElementById("name-error").innerHTML = '';
};
document.getElementById("phone").onfocus = () => {
  document.getElementById("phone-error").innerHTML = '';
};
document.getElementById("address").onfocus = () => {
  document.getElementById("address-error").innerHTML = '';
};