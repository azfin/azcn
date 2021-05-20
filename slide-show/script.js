class CitiesSlider extends React.Component {
  //https://codepen.io/thanglamhuu/pen/rNWZWWx
  constructor(props) {
    super(props);

    this.IMAGE_PARTS = 4;

    this.changeTO = null;
    this.AUTOCHANGE_TIME = 4000;

    this.state = { activeSlide: -1, prevSlide: -1, sliderReady: false };
  }

  componentWillUnmount() {
    window.clearTimeout(this.changeTO);
  }

  componentDidMount() {
    this.runAutochangeTO();
    setTimeout(() => {
      this.setState({ activeSlide: 0, sliderReady: true });
    }, 0);
  }

  runAutochangeTO() {
    this.changeTO = setTimeout(() => {
      this.changeSlides(1);
      this.runAutochangeTO();
    }, this.AUTOCHANGE_TIME);
  }

  changeSlides(change) {
    window.clearTimeout(this.changeTO);
    const { length } = this.props.slides;
    const prevSlide = this.state.activeSlide;
    let activeSlide = prevSlide + change;
    if (activeSlide < 0) activeSlide = length - 1;
    if (activeSlide >= length) activeSlide = 0;
    this.setState({ activeSlide, prevSlide });
  }

  render() {
    const { activeSlide, prevSlide, sliderReady } = this.state;
    return /*#__PURE__*/(
      React.createElement("div", { className: classNames('slider', { 's--ready': sliderReady }) }, /*#__PURE__*/
      React.createElement("div", { className: "slider__slides" },
      this.props.slides.map((slide, index) => /*#__PURE__*/
      React.createElement("a", {
        className: classNames('slider__slide', { 's--active': activeSlide === index, 's--prev': prevSlide === index }),
        key: slide.city, href: slide.link, target: 'blank' }, /*#__PURE__*/

      React.createElement("div", { className: "slider__slide-content" }, /*#__PURE__*/
      React.createElement("h3", { className: "slider__slide-subheading" })), /*#__PURE__*/

      React.createElement("div", { className: "slider__slide-parts" },
      [...Array(this.IMAGE_PARTS).fill()].map((x, i) => /*#__PURE__*/
      React.createElement("div", { className: "slider__slide-part", key: i }, /*#__PURE__*/
      React.createElement("div", { className: "slider__slide-part-inner", style: { backgroundImage: `url(${slide.img})` } }))))))), /*#__PURE__*/






      React.createElement("div", { className: "slider__control", onClick: () => this.changeSlides(-1) }), /*#__PURE__*/
      React.createElement("div", { className: "slider__control slider__control--right", onClick: () => this.changeSlides(1) })));


  }}


const slides = [
{
  city: 'Khóa học',
  link: 'https://academy.azfin.vn/khoa-hoc/2104-chien-luoc-dung-tren-vai-nguoi-khong-lo-bi-kip-danh-bai-thi-truong',
  country: 'CHIẾN LƯỢC ĐỨNG TRÊN VAI NGƯỜI KHỔNG LỒ',
  img: 'https://cdn.azfin.vn/slide-show/khoa-hoc-chung-khoan-dung-tren-vai-nguoi-khong-lo-sm.jpg' },
{
  city: 'Khóa học',
  link: 'https://academy.azfin.vn/khoa-hoc/9-bi-quyet-doc-vi-bao-cao-tai-chinh-cua-doanh-nghiep',
  country: 'KHÓA HỌC 09 BÍ QUYẾT ĐỌC VỊ DOANH NGHIỆP',
  img: 'https://cdn.azfin.vn/slide-show/doc-vi-doanh-nghiep.jpg' },
{
  city: 'Khóa học:',
  country: 'ĐỌC VỊ CỔ PHIẾU CHUYÊN SÂU',
  link: 'https://azfin.vn/khoa-hoc-doc-vi-co-phieu-chuyen-sau',
  img: 'https://hachium.storage.googleapis.com/users/10787c45caa3e6c134a49a0f8cb6b364/1607966792200.jpg' },
{
  city: 'Tích Sản Cổ Phiếu - Tự Do Tài Chính',
  link: 'https://azfin.vn/posts/vn/gioi-thieu-chuong-trinh-tich-san-co-phieu-tu-do-tai-chinh',
  img: 'https://cdn.azfin.vn/slide-show/tich-san-co-phieu.jpg' }];


ReactDOM.render( /*#__PURE__*/React.createElement(CitiesSlider, { slides: slides }), document.querySelector('#app'));