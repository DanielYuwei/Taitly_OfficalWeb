function sendMail() {
    //抓值
    const name = document.getElementsByName('name_input')[0].value;
    let subject = document.getElementsByName('subject_input')[0].value; // 使用 let 以便后续修改
    const phone = document.getElementsByName('phone_input')[0].value;
    const message = document.getElementsByName('message_input')[0].value;

    //檢核必要欄位
    if (subject == null || subject === "") {
        const subject_phone = document.getElementsByName('subject_input_phone')[0].value; // 修改成使用 `subject_input_phone`
        if (subject_phone != null && subject_phone !== "") {
            subject = subject_phone; 
        } else {
            const subjectField1 = document.getElementsByName('subject_input')[0];
            const subjectField2 = document.getElementsByName('subject_input_phone')[0];
            const error = document.getElementsByName('Subject_error')[0];
            alert("Subject is a required field!");
            //修改為紅色並focus
            subjectField1.style.border = "3px solid red";
            subjectField1.style.outline = "none";
            subjectField2.style.border = "3px solid red";
            subjectField2.style.outline = "none";
            error.style.display = "block";
            subjectField1.focus();
            subjectField2.focus();
            return false;
        }
    }

    //檢核必要欄位
    if (message == null || message === "") {
        const messageField = document.getElementsByName('message_input')[0];
        const error = document.getElementsByName('Message_error')[0];
        alert("Message is a required field!");
        //修改為紅色並focus
        messageField.style.border = "3px solid red";
        messageField.style.outline = "none";
        error.style.display = "block";
        messageField.focus();
        return false;
    }

    /*寄信*/ 
    const mailtoLink = `mailto:hellotaitly@outlook.com?subject=${subject}&body=${message}%0D%0A%0D%0AName: ${name}%0D%0APhone: ${phone}`;

    window.location.href = mailtoLink;
}
