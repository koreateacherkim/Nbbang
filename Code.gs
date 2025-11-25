function doGet() {
  // 'Index'는 왼쪽 파일 목록에 있는 HTML 파일의 이름과 정확히 같아야 합니다.
  return HtmlService.createHtmlOutputFromFile('Index')
    .setTitle('N빵 계산기')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1');
}
