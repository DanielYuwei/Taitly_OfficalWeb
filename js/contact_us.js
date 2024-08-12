function sendMail(){

    // 獲取輸入的數據
    const name = document.getElementsByName('name_input')[0].value;
    const subject = document.getElementsByName('subject_input')[0].value;
    const phone = document.getElementsByName('phone_input')[0].value;
    const message = document.getElementsByName('message_input')[0].value;

    //檢核必填欄位
    if(subject==null || subject==""){
        const subject = document.getElementsByName('subject_input')[0];
        const error = document.getElementsByName('Subject_error')[0];
        alert("Subject is required fields ! ");
        //把未輸入的欄位框框改成紅色+focus
        subject.style.border ="3px solid red";
        subject.style.outline ="none";
        error.style.display = "block";
        subject.focus();
        return false;
    }

    if(message == null || message==""){
        const message = document.getElementsByName('message_input')[0];
        const error = document.getElementsByName('Message_error')[0];
        alert("Message is required fields ! ");
        //把未輸入的欄位框框改成紅色+focus
        message.style.border ="3px solid red";
        message.style.outline ="none";
        error.style.display = "block";
        message.focus();
        return false;
    }

    // 構造 mailto: 連結
    const mailtoLink = `mailto:hellotaitly@outlook.com?subject=${subject}&body=${message}%0D%0A%0D%0AName: ${name}%0D%0APhone: ${phone}`;

    // 打開郵件客戶端
    window.location.href = mailtoLink;
}