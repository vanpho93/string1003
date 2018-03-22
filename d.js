const item = `
<item>
<title>Người phụ nữ hoang báo bị cướp hơn 3 lượng vàng</title>
<description>
<![CDATA[
<a href="https://vnexpress.net/tin-tuc/phap-luat/nguoi-phu-nu-hoang-bao-bi-cuop-hon-3-luong-vang-3726397.html"><img width=130 height=100 src="https://i-vnexpress.vnecdn.net/2018/03/22/matvangne151366332648981513663362-1521714284_180x108.jpg" ></a></br>Lấy nhiều tiền, vàng dành dụm của gia đình tiêu xài hết, người phụ nữ ở Đồng Tháp đến công an báo bị kẻ lạ mặt kề dao cướp.
]]>
</description>
<pubDate>Thu, 22 Mar 2018 17:29:32 +0700</pubDate>
<link>
https://vnexpress.net/tin-tuc/phap-luat/nguoi-phu-nu-hoang-bao-bi-cuop-hon-3-luong-vang-3726397.html
</link>
<guid>
https://vnexpress.net/tin-tuc/phap-luat/nguoi-phu-nu-hoang-bao-bi-cuop-hon-3-luong-vang-3726397.html
</guid>
<slash:comments>0</slash:comments>
</item>`;


function getBody(source, pre, post) {
    const startIndex = source.indexOf(pre) + pre.length;
    const endIndex = source.indexOf(post);
    return source.substring(startIndex, endIndex).trim();
}
function getTinFromItem(item) {
    const title = getBody(item, '<title>', '</title>');
    const link = getBody(item, '<link>', '</link>');
    const image = getBody(item, 'src="', '" ></a>');
    const description = getBody(item, '></a></br>', ']]>');
    const lenghtOfLink = link.length;
    const id = link.substr(lenghtOfLink - 12, 7);
}