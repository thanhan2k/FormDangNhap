function GuiThongTin()
{
    if(txtUserName.value==""||txtUserName==null)
    {
        thongbao.innerText="Bạn chưa nhập username";
        txtUserName.focus();
        return false;
    }
    if(txtPassword.value==""||txtPassword==null)
    {
        thongbao.innerText="Bạn chưa nhập password";
        txtPassword.focus();
        return false;
    }
    if(txtUserName.value=="Hoàng Quân" && txtPassword.value=="123456")
    {
        // thongbao.innerText="Chào bạn <b>" + txtUserName.value + "</b>";
        alert("Chào bạn " + txtUserName.value)
        return true
    }
    else
    {
        thongbao.innerText="Thông tin đăng nhập không hợp lệ";
        txtUserName.select();
        return false;
    }
}

function LamLai()
{
    thongbao.innerText="";
    txtUserName.focus();
}