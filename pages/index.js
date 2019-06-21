import { Carousel } from "antd";
import LayoutComponent from "../components/Layout";

export default class extends React.Component {
  render() {
    return (
      <LayoutComponent title="Dev&Coffee">
        <Carousel autoplay>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
        </Carousel>
        <style>{`
          .ant-carousel .slick-slide {
            text-align: center;
            height: 300px;
            line-height: 300px;
            background: #364d79;
            overflow: hidden;
          }

          .ant-carousel .slick-slide h3 {
            color: #fff;
          }
        `}</style>
      </LayoutComponent>
    );
  }
}
