import "./Testimonials.css";
import Image from "next/image";
// import getCertifiedImage from "../../../public/assets/images/mentorship.png";
import Button from "../button/Button";
import AnimateContent from "../AnimateContent";

const Testimonials = () => {
  return (
    <div className="relative testimonials-section">
      <div className="testimonials-left">
      <AnimateContent>
        <h2 className="heading-2 text-center">See what our interns said</h2>
        </AnimateContent>
        <br />
        
        <div className="testimonial-slider"></div>
        <div className="other-ratings">
        <AnimateContent>
          <div className="capterra">
            <div className="capterra-top">
              <svg
                width="226"
                height="54"
                viewBox="0 0 226 54"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M30.3767 38.5645C30.1383 38.8029 29.7411 39.1003 29.1857 39.4576C28.6293 39.8152 27.9053 40.1724 27.0121 40.53C26.1189 40.8868 25.0265 41.1941 23.7369 41.4531C22.4461 41.7105 20.9679 41.8399 19.3005 41.8399C16.0845 41.8399 13.3053 41.3235 10.9633 40.2918C8.62034 39.2602 6.68515 37.8199 5.15715 35.9742C3.62855 34.1279 2.50734 31.9448 1.79274 29.4231C1.07814 26.9021 0.720947 24.1332 0.720947 21.1155C0.720947 18.0989 1.10795 15.3092 1.88215 12.7485C2.65615 10.1875 3.81735 7.97502 5.36555 6.10813C6.91395 4.24263 8.84934 2.78336 11.1719 1.73091C13.4943 0.679658 16.2233 0.152832 19.3599 0.152832C20.9083 0.152832 22.3077 0.292239 23.5583 0.569652C24.8089 0.847666 25.9003 1.17548 26.8337 1.5523C27.7659 1.93012 28.5403 2.32634 29.1561 2.74336C29.7711 3.16018 30.2375 3.5084 30.5557 3.78541C30.9129 4.10383 31.2201 4.48065 31.4787 4.91687C31.7365 5.35429 31.8657 5.83071 31.8657 6.34634C31.8657 7.14098 31.5679 7.93462 30.9725 8.72845C30.3771 9.52309 29.7219 10.2575 29.0071 10.932C28.5307 10.4555 27.9949 9.96992 27.3995 9.47309C26.8039 8.97687 26.1387 8.54064 25.4045 8.16283C24.6695 7.78601 23.8357 7.46859 22.9033 7.20998C21.9701 6.95217 20.9281 6.82276 19.7771 6.82276C17.7523 6.82276 16.0553 7.23038 14.6855 8.04362C13.3159 8.85786 12.2141 9.91951 11.3805 11.2298C10.5469 12.54 9.95135 14.0389 9.59395 15.726C9.23675 17.4139 9.05814 19.1308 9.05814 20.8775C9.05814 22.7439 9.23675 24.5304 9.59395 26.2369C9.95115 27.9442 10.5661 29.4533 11.4401 30.7629C12.3127 32.073 13.4545 33.1255 14.8641 33.9191C16.2727 34.7139 18.0295 35.1104 20.1343 35.1104C21.2451 35.1104 22.2679 34.9717 23.2011 34.6937C24.1333 34.4161 24.9577 34.0783 25.6723 33.6807C26.3869 33.2847 27.0123 32.868 27.5481 32.4308C28.0841 31.994 28.5307 31.6174 28.8881 31.299C29.1263 31.5774 29.4035 31.9152 29.7217 32.3116C30.0416 32.7122 30.3398 33.1297 30.6149 33.5623C30.8923 33.9995 31.1305 34.4359 31.3295 34.8719C31.5277 35.3096 31.6271 35.706 31.6271 36.0628C31.6271 36.5796 31.5277 37.016 31.3295 37.3733C31.1303 37.7307 30.8129 38.1281 30.3767 38.5645ZM61.0653 33.9971C61.0653 37.1527 61.5239 39.4494 62.4431 40.8872C61.7243 41.1662 61.0552 41.3663 60.4362 41.4861C59.8166 41.6061 59.1679 41.6657 58.4891 41.6657C57.0515 41.6657 55.9627 41.3861 55.2243 40.827C54.4849 40.2684 54.0157 39.4696 53.8165 38.4305C52.9373 39.3502 51.7793 40.1286 50.3417 40.7678C48.9039 41.4057 47.1459 41.7261 45.0697 41.7261C43.9913 41.7261 42.9131 41.5765 41.8347 41.2789C40.7561 40.9788 39.7773 40.492 38.8989 39.816C38.0199 39.1386 37.3013 38.2327 36.7423 37.0979C36.1825 35.963 35.9035 34.5797 35.9035 32.9476C35.9035 30.9171 36.3923 29.2643 37.3713 27.9908C38.3497 26.7161 39.5778 25.7111 41.056 24.9743C42.5331 24.2382 44.131 23.7316 45.8488 23.4522C47.5655 23.1732 49.1437 22.9946 50.5813 22.914C51.0609 22.8745 51.5298 22.8539 51.9893 22.8539H53.2774V21.7635C53.2774 20.2282 52.8673 19.1376 52.0491 18.4917C51.2299 17.8457 49.9017 17.5219 48.0651 17.5219C46.3475 17.5219 44.8197 17.8017 43.4821 18.3605C42.1435 18.9204 40.8358 19.5588 39.5581 20.2778C38.9983 19.599 38.5488 18.8504 38.2102 18.0311C37.8706 17.2131 37.7009 16.6036 37.7009 16.2038C37.7009 15.645 38.0097 15.1058 38.6295 14.5861C39.2483 14.0677 40.0974 13.5977 41.1758 13.1783C42.2544 12.7589 43.4918 12.42 44.8904 12.1598C46.2878 11.9004 47.7657 11.7704 49.3235 11.7704C51.4801 11.7704 53.3074 11.9904 54.805 12.4294C56.3027 12.8695 57.5207 13.5481 58.4595 14.4663C59.3975 15.3858 60.0667 16.5334 60.4663 17.9113C60.8651 19.2894 61.0655 20.8977 61.0655 22.7341L61.0653 33.9971ZM53.3967 27.0476H52.5583C52.2781 27.0476 51.9984 27.0684 51.7196 27.1078C50.7206 27.1882 49.7319 27.3078 48.7541 27.4668C47.7749 27.627 46.9062 27.9066 46.1482 28.3058C45.389 28.7054 44.7701 29.2251 44.291 29.8633C43.8116 30.5027 43.5719 31.322 43.5719 32.32C43.5719 33.4385 43.8911 34.3865 44.5303 35.1656C45.1687 35.9446 46.2471 36.334 47.7655 36.334C48.5237 36.334 49.2429 36.2348 49.9223 36.034C50.6009 35.8352 51.2 35.5754 51.7196 35.2558C52.2382 34.9361 52.6481 34.5869 52.9478 34.2069C53.2472 33.8279 53.3969 33.4787 53.3969 33.1589L53.3967 27.0476ZM75.9817 15.245C76.6183 14.4867 77.6143 13.7173 78.9677 12.9383C80.3213 12.1594 82.0333 11.77 84.104 11.77C85.5776 11.77 86.9808 12.0198 88.3149 12.5188C89.6478 13.0187 90.8327 13.8277 91.868 14.9454C92.9034 16.064 93.7293 17.5421 94.3469 19.3788C94.9639 21.2165 95.2728 23.4736 95.2728 26.1487C95.2728 29.2641 94.9139 31.831 94.1975 33.8475C93.4803 35.8652 92.5554 37.4629 91.4212 38.6407C90.2863 39.819 89.0215 40.6478 87.6287 41.1268C86.2349 41.6061 84.8411 41.8461 83.4482 41.8461C82.2934 41.8461 81.2875 41.7161 80.4323 41.4567C79.5757 41.1965 78.8493 40.9078 78.2521 40.5878C77.6549 40.2686 77.1973 39.9496 76.8791 39.6292C76.5607 39.31 76.3613 39.0897 76.2819 38.9697V53.6975H68.1341V12.6086C68.3345 12.5694 68.5761 12.5292 68.8586 12.489C69.1003 12.4498 69.382 12.4196 69.7039 12.399C70.0257 12.3794 70.4081 12.3692 70.8505 12.3692C72.1779 12.3692 73.3049 12.5892 74.2306 13.0283C75.156 13.4683 75.7403 14.2067 75.9817 15.245ZM86.7655 26.3283C86.7655 25.1303 86.6661 24.0126 86.4677 22.9736C86.2693 21.9355 85.9417 21.0367 85.4849 20.2776C85.0281 19.5192 84.4119 18.9296 83.6379 18.5099C82.8627 18.0907 81.9203 17.8813 80.8089 17.8813C79.1411 17.8813 77.9795 18.2013 77.3239 18.8396C76.6689 19.479 76.3413 20.1784 76.3413 20.9367V33.6381C76.6585 33.9581 77.2237 34.3369 78.0381 34.7763C78.8527 35.2162 79.7952 35.435 80.868 35.435C82.8936 35.435 84.3827 34.6369 85.3359 33.0389C86.2891 31.4416 86.7655 29.2043 86.7655 26.3283ZM101.561 36.6336C101.281 35.8352 101.102 34.9959 101.022 34.1171C100.942 33.2389 100.902 32.3604 100.902 31.4806V3.68181C101.181 3.6426 101.481 3.6024 101.801 3.562C102.079 3.5228 102.379 3.493 102.699 3.4722C103.019 3.45259 103.338 3.44239 103.658 3.44239C104.296 3.44239 104.936 3.5024 105.575 3.622C106.213 3.74201 106.793 3.98162 107.313 4.34084C107.831 4.70025 108.25 5.19008 108.57 5.80871C108.89 6.42834 109.05 7.23738 109.05 8.23503V12.4886H117.437V18.5401H109.05V31.3162C109.05 34.1023 110.188 35.495 112.465 35.495C113.024 35.495 113.552 35.4056 114.052 35.2254C114.551 35.0458 115 34.8463 115.4 34.6265C115.799 34.4069 116.149 34.1773 116.449 33.9375C116.748 33.6977 116.958 33.5183 117.077 33.3985C117.677 34.2777 118.135 35.0387 118.455 35.681C118.775 36.324 118.935 36.9274 118.935 37.4913C118.935 38.0159 118.725 38.5303 118.306 39.0339C117.886 39.5376 117.296 40.002 116.538 40.425C115.779 40.848 114.861 41.1907 113.782 41.4529C112.704 41.7151 111.525 41.8463 110.248 41.8463C107.771 41.8463 105.844 41.3667 104.466 40.4084C103.089 39.4494 102.12 38.1911 101.561 36.6336ZM138.072 35.8546C139.074 35.8546 139.956 35.7452 140.718 35.525C141.479 35.3062 142.16 35.0364 142.762 34.7167C143.362 34.3975 143.884 34.0479 144.325 33.6683C144.766 33.2891 145.166 32.9396 145.528 32.6194C146.008 33.2183 146.509 33.9879 147.03 34.9257C147.551 35.8652 147.812 36.6336 147.812 37.2325C147.812 38.1115 147.312 38.9103 146.314 39.6292C145.476 40.2686 144.286 40.8178 142.75 41.2765C141.212 41.7355 139.404 41.9655 137.328 41.9655C135.45 41.9655 133.603 41.7261 131.786 41.2467C129.969 40.7676 128.351 39.9286 126.934 38.7301C125.515 37.5325 124.367 35.925 123.489 33.9077C122.61 31.8908 122.171 29.3451 122.171 26.2687C122.171 23.7522 122.56 21.5863 123.339 19.7684C124.118 17.9513 125.156 16.4434 126.455 15.2452C127.752 14.0469 129.22 13.1689 130.858 12.6088C132.495 12.0502 134.173 11.7702 135.89 11.7702C138.127 11.7702 140.024 12.1204 141.581 12.8187C143.139 13.5179 144.406 14.4567 145.386 15.6346C146.364 16.8129 147.072 18.1609 147.512 19.6786C147.951 21.1969 148.171 22.7939 148.171 24.4714V25.3101C148.171 25.6305 148.161 25.9691 148.141 26.3285C148.121 26.6883 148.101 27.0384 148.082 27.377C148.061 27.7172 148.031 27.9864 147.992 28.186H130.318C130.479 30.3829 131.16 32.21 132.362 33.6683C133.563 35.1266 135.467 35.8546 138.072 35.8546ZM140.802 23.6924C140.802 21.7753 140.43 20.2176 139.687 19.0194C138.944 17.8213 137.608 17.2219 135.681 17.2219C134.033 17.2219 132.718 17.7913 131.734 18.9296C130.749 20.068 130.258 21.6555 130.258 23.6922L140.802 23.6924ZM162.35 15.3964C162.589 15.04 162.909 14.6439 163.308 14.2075C163.707 13.7715 164.197 13.3753 164.776 13.0189C165.355 12.6622 165.994 12.3644 166.693 12.1268C167.391 11.889 168.141 11.7702 168.94 11.7702C169.419 11.7702 169.929 11.8104 170.468 11.889C171.007 11.9686 171.506 12.1174 171.965 12.3346C172.424 12.5528 172.794 12.8495 173.074 13.2259C173.353 13.6023 173.493 14.0675 173.493 14.6217C173.493 15.4932 173.273 16.494 172.834 17.6239C172.394 18.7547 171.955 19.719 171.516 20.5174C170.836 19.9584 170.158 19.529 169.479 19.2294C168.8 18.93 168.001 18.78 167.083 18.78C165.844 18.78 164.806 19.1406 163.968 19.8612C163.128 20.582 162.709 21.4433 162.709 22.4447V41.8395H154.562V12.6086C154.761 12.5694 155.001 12.5292 155.281 12.489C155.52 12.4498 155.8 12.4196 156.119 12.399C156.439 12.3794 156.818 12.3692 157.258 12.3692C158.535 12.3692 159.644 12.617 160.583 13.1117C161.52 13.6057 162.11 14.3677 162.35 15.3964ZM185.515 15.3964C185.754 15.04 186.073 14.6439 186.473 14.2075C186.872 13.7715 187.362 13.3753 187.941 13.0189C188.52 12.6622 189.159 12.3644 189.858 12.1268C190.556 11.889 191.305 11.7702 192.105 11.7702C192.584 11.7702 193.093 11.8104 193.632 11.889C194.171 11.9686 194.67 12.1174 195.13 12.3346C195.589 12.5528 195.958 12.8495 196.239 13.2259C196.517 13.6023 196.658 14.0675 196.658 14.6217C196.658 15.4932 196.437 16.494 195.999 17.6239C195.558 18.7547 195.12 19.719 194.681 20.5174C194.001 19.9584 193.322 19.529 192.644 19.2294C191.964 18.93 191.166 18.78 190.247 18.78C189.009 18.78 187.971 19.1406 187.132 19.8612C186.293 20.582 185.874 21.4433 185.874 22.4447V41.8395H177.727V12.6086C177.926 12.5694 178.166 12.5292 178.446 12.489C178.685 12.4498 178.965 12.4196 179.284 12.399C179.603 12.3794 179.982 12.3692 180.422 12.3692C181.7 12.3692 182.809 12.617 183.747 13.1117C184.685 13.6057 185.275 14.3677 185.515 15.3964ZM224.396 33.9971C224.396 37.1527 224.855 39.4494 225.774 40.8872C225.055 41.1662 224.386 41.3663 223.767 41.4861C223.147 41.6061 222.499 41.6657 221.82 41.6657C220.382 41.6657 219.293 41.3861 218.555 40.827C217.815 40.2684 217.346 39.4696 217.147 38.4305C216.268 39.3502 215.11 40.1286 213.672 40.7678C212.235 41.4057 210.476 41.7261 208.4 41.7261C207.322 41.7261 206.244 41.5765 205.165 41.2789C204.087 40.9788 203.107 40.492 202.23 39.816C201.351 39.1386 200.632 38.2327 200.073 37.0979C199.513 35.963 199.234 34.5797 199.234 32.9476C199.234 30.9171 199.723 29.2643 200.702 27.9908C201.68 26.7161 202.909 25.7111 204.387 24.9743C205.864 24.2382 207.461 23.7316 209.179 23.4522C210.896 23.1732 212.474 22.9946 213.912 22.914C214.391 22.8745 214.86 22.8539 215.32 22.8539H216.608V21.7635C216.608 20.2282 216.198 19.1376 215.38 18.4917C214.56 17.8457 213.232 17.5219 211.396 17.5219C209.678 17.5219 208.151 17.8017 206.813 18.3605C205.474 18.9204 204.167 19.5588 202.889 20.2778C202.329 19.599 201.879 18.8504 201.541 18.0311C201.201 17.2131 201.032 16.6036 201.032 16.2038C201.032 15.645 201.34 15.1058 201.96 14.5861C202.579 14.0677 203.428 13.5977 204.506 13.1783C205.585 12.7589 206.822 12.42 208.22 12.1598C209.618 11.9004 211.096 11.7704 212.654 11.7704C214.81 11.7704 216.638 11.9904 218.136 12.4294C219.633 12.8695 220.851 13.5481 221.79 14.4663C222.728 15.3858 223.397 16.5334 223.797 17.9113C224.195 19.2894 224.396 20.8977 224.396 22.7341V33.9971ZM216.727 27.0476H215.889C215.609 27.0476 215.329 27.0684 215.05 27.1078C214.052 27.1882 213.063 27.3078 212.085 27.4668C211.105 27.627 210.237 27.9066 209.479 28.3058C208.72 28.7054 208.101 29.2251 207.621 29.8633C207.142 30.5027 206.902 31.322 206.902 32.32C206.902 33.4385 207.222 34.3865 207.861 35.1656C208.499 35.9446 209.578 36.334 211.096 36.334C211.855 36.334 212.574 36.2348 213.253 36.034C213.932 35.8352 214.531 35.5754 215.05 35.2558C215.568 34.9361 215.979 34.5869 216.278 34.2069C216.578 33.8279 216.728 33.4787 216.728 33.1589L216.727 27.0476Z"
                  fill="#545256"
                />
              </svg>
            </div>
            <p>4.5 Star Rating</p>
          </div>
          </AnimateContent>

          <AnimateContent>
          <div className="trust-radius">
            <div className="trust-radius-top">
              <svg
                width="81"
                height="43"
                viewBox="0 0 81 53"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <mask
                  id="mask0_177_1782"
                  style={{ maskType: "luminance" }}
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="81"
                  height="53"
                >
                  <path d="M80.1619 0H0V53H80.1619V0Z" fill="white" />
                </mask>
                <g mask="url(#mask0_177_1782)">
                  <path
                    d="M24.2915 2.58984C24.4737 2.7103 24.6559 2.83075 24.8381 2.95121L33.4615 11.5035C33.8259 11.8648 34.0081 12.2864 34.0081 12.7683V52.2773C34.0081 52.6387 33.7652 52.8796 33.4008 52.8796C33.2186 52.8796 33.0972 52.8194 32.9757 52.6989L24.8381 44.6285C24.4737 44.3273 24.2915 43.8455 24.2915 43.3637V2.58984Z"
                    fill="#323134"
                  />
                  <path
                    d="M48.0365 2.95121C48.158 2.83075 48.3401 2.7103 48.5831 2.58984V43.3637C48.5831 43.8455 48.4009 44.3273 48.0365 44.6285L39.8988 52.6989C39.6559 52.9398 39.2916 52.9398 39.0486 52.6989C38.9272 52.5785 38.8665 52.458 38.8665 52.2773V12.7683C38.8665 12.2864 39.0486 11.8648 39.413 11.5035L48.0365 2.95121Z"
                    fill="#323134"
                  />
                  <path
                    d="M63.7652 34.3295L63.1579 33.7272V25.2954H54.8988C54.7166 25.2954 54.5952 25.3556 54.4737 25.4761L48.583 31.3181L67.4696 50.0488C67.834 50.4102 68.2591 50.5909 68.7449 50.5909H78.7045C79.0688 50.5909 79.3118 50.2897 79.3118 49.9886C79.3118 49.8079 79.251 49.6875 79.1296 49.567L63.7652 34.3295Z"
                    fill="#323134"
                  />
                  <path
                    d="M49.3117 2.40918C48.8259 2.40918 48.4008 2.58986 48.0364 2.95123L39.413 11.5035C39.2915 11.6842 39.17 11.8046 39.0486 12.0455H63.1579V33.7274L63.7652 34.3296L72.3279 25.8376C72.6923 25.4762 72.8745 25.0546 72.8745 24.5728V12.7683C72.8745 12.2865 72.6923 11.8046 72.3279 11.5035L63.7045 2.95123C63.3401 2.58986 62.915 2.40918 62.4292 2.40918H49.3117Z"
                    fill="#323134"
                  />
                  <path
                    d="M24.8381 2.95123C24.4737 2.58986 24.0486 2.40918 23.5628 2.40918H0.850207C0.485835 2.40918 0.24292 2.71032 0.24292 3.01145C0.24292 3.19213 0.303649 3.31259 0.425106 3.43304L8.56276 11.5035C8.92713 11.8649 9.35223 12.0455 9.83806 12.0455H32.7935C33.4615 12.0455 34.0081 12.5876 34.0081 13.2501V12.7683C34.0081 12.2865 33.8259 11.8046 33.4615 11.5035L24.8381 2.95123Z"
                    fill="#545256"
                  />
                  <path
                    d="M48.0365 2.95123C48.4009 2.58986 48.826 2.40918 49.3118 2.40918H62.3685C62.8543 2.40918 63.3401 2.58986 63.6438 2.95123L72.2673 11.5035C72.6316 11.8649 72.8138 12.2865 72.8138 12.7683V13.2501C72.8138 12.5876 72.2673 12.0455 71.5992 12.0455H40.081C39.413 12.0455 38.8665 12.5876 38.8665 13.2501V12.7683C38.8665 12.2865 39.0486 11.8046 39.413 11.5035L48.0365 2.95123Z"
                    fill="#545256"
                  />
                  <path
                    d="M72.8745 24.0908C72.8745 24.7533 72.3279 25.2954 71.6599 25.2954H55.3846C55.2024 25.2954 55.0809 25.4158 55.0809 25.5965C55.0809 25.6567 55.1417 25.7772 55.1417 25.7772L63.7651 34.3295L72.3279 25.8374C72.6923 25.476 72.8745 25.0545 72.8745 24.5726V24.0908Z"
                    fill="#545256"
                  />
                </g>
              </svg>
              <svg
                width="213"
                height="39"
                viewBox="0 0 213 39"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <mask
                  id="mask0_177_1794"
                  style={{ maskType: "luminance" }}
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="213"
                  height="39"
                >
                  <path
                    d="M213 0.227051H0.449341V38.7725H213V0.227051Z"
                    fill="white"
                  />
                </mask>
                <g mask="url(#mask0_177_1794)">
                  <path
                    d="M212.757 27.691C212.757 23.5955 210.389 22.0898 204.68 20.6444C201.219 19.8012 200.308 19.1387 200.308 17.9341C200.308 16.7296 201.401 15.9466 203.648 15.9466C206.138 16.0069 208.567 16.6694 210.753 17.8739L211.482 13.5376C208.992 12.5137 206.381 11.9716 203.708 12.0319C198.547 12.0319 195.51 14.6819 195.51 18.3557C195.51 22.3307 197.757 23.8364 203.162 25.1614C206.927 26.0648 207.959 26.6069 207.959 28.233C207.959 29.6785 206.502 30.5216 204.012 30.5216C201.097 30.4614 198.243 29.558 195.814 27.9921L195.146 32.3887C197.878 33.7137 200.854 34.4364 203.83 34.4364C209.599 34.4364 212.757 31.9069 212.757 27.691Z"
                    fill="#323134"
                  />
                  <path
                    d="M192.352 33.9543V12.2725H187.008V26.9679C185.308 28.6543 183.425 29.7384 181.542 29.7384C179.356 29.7384 178.506 28.4134 178.506 26.5463V12.2725H173.162V27.9316C173.162 31.9668 175.409 34.3759 179.721 34.3759C182.757 34.3759 185.186 32.81 187.312 30.9429L188.04 33.9543H192.352Z"
                    fill="#323134"
                  />
                  <path
                    d="M170.065 33.9543V12.2725H164.842V33.9543H170.065Z"
                    fill="#323134"
                  />
                  <path
                    d="M167.453 2.81689C169.154 2.81689 170.49 4.14189 170.49 5.82826C170.49 7.51462 169.154 8.83962 167.453 8.83962C165.753 8.83962 164.417 7.51462 164.417 5.82826C164.417 4.14189 165.753 2.81689 167.453 2.81689Z"
                    fill="#323134"
                  />
                  <path
                    d="M156.461 26.7272C154.883 28.5943 153.243 29.7988 151.057 29.7988C148.385 29.7988 146.441 27.7511 146.441 23.5352C146.441 18.7772 148.749 16.4284 151.846 16.4284C153.425 16.3681 155.004 16.7295 156.461 17.392V26.7272ZM161.684 33.9545V1.73291L156.461 2.63632V13.0556C154.761 12.5136 152.939 12.2125 151.117 12.2727C145.834 12.2727 141.158 15.8261 141.158 23.8363C141.158 31.0636 144.984 34.4363 149.781 34.4363C152.939 34.4363 155.125 32.8704 156.765 31.0034L157.251 34.0147L161.684 33.9545Z"
                    fill="#323134"
                  />
                  <path
                    d="M133.688 28.0522C132.17 29.4976 130.166 30.4011 128.101 30.4613C126.279 30.4613 125.125 29.4374 125.125 27.9317C125.125 25.884 126.765 24.017 133.688 23.234V28.0522ZM138.911 33.9545V19.1988C138.911 14.1397 136.117 12.0317 130.348 12.0317C127.312 12.0317 124.275 12.634 121.482 13.7783L122.089 17.934C124.518 16.8499 127.069 16.3079 129.68 16.2476C132.231 16.2476 133.688 17.1511 133.688 19.4397V20.1022C124.397 20.9454 119.903 23.234 119.903 28.4136C119.903 32.1476 122.514 34.3761 126.401 34.3761C129.316 34.3761 132.049 33.2317 134.053 31.184L134.538 33.9545H138.911Z"
                    fill="#323134"
                  />
                  <path
                    d="M119.053 33.2318L110.672 21.8488C114.498 20.6443 116.988 17.9943 116.988 13.7784C116.988 8.23746 112.919 5.04541 106.239 5.04541H97.0081V33.9545H102.474V22.8125H105.146L113.344 34.2556L119.053 33.2318ZM111.522 14.0795C111.522 17.0909 109.215 18.7772 105.51 18.7772H102.413V9.56246H105.814C109.579 9.56246 111.522 11.1886 111.522 14.0795Z"
                    fill="#323134"
                  />
                  <path
                    d="M94.2753 33.9544L93.668 29.618C93.0607 29.7385 92.3927 29.7987 91.7854 29.7987C89.5992 29.7987 88.749 28.8351 88.749 27.0885V16.4885H94.2753L93.3644 12.2726H88.749V4.74414L83.587 5.64755V12.2726H80.004V16.4885H83.587V27.9316C83.587 32.8101 86.502 34.3157 90.8137 34.3157C91.9676 34.3157 93.1214 34.1953 94.2753 33.9544Z"
                    fill="#323134"
                  />
                  <path
                    d="M78.9109 27.6906C78.9109 23.5952 76.5425 22.0895 70.834 20.6441C67.3724 19.8009 66.4615 19.1384 66.4615 17.9338C66.4615 16.7293 67.5546 15.9463 69.8016 15.9463C72.2915 16.0066 74.7206 16.6691 76.9068 17.8736L77.5749 13.477C75.085 12.4531 72.4737 11.9111 69.8016 11.9713C64.6396 11.9713 61.6032 14.6213 61.6032 18.2952C61.6032 22.2702 63.8502 23.7759 69.255 25.1009C73.0202 26.0043 74.0526 26.5463 74.0526 28.1725C74.0526 29.6179 72.5951 30.4611 70.1052 30.4611C67.1903 30.4009 64.3967 29.4975 61.9676 27.9316L61.2388 32.3281C63.9716 33.6532 66.9473 34.3759 69.9838 34.3759C75.753 34.4361 78.9109 31.9066 78.9109 27.6906Z"
                    fill="#323134"
                  />
                  <path
                    d="M58.7489 33.9543V12.2725H53.4047V26.9679C51.7043 28.6543 49.8218 29.7384 47.9392 29.7384C45.7529 29.7384 44.9027 28.4134 44.9027 26.5463V12.2725H39.5586V27.9316C39.5586 31.9668 41.8056 34.3759 46.1173 34.3759C49.1537 34.3759 51.5829 32.81 53.7084 30.9429L54.4371 33.9543H58.7489Z"
                    fill="#323134"
                  />
                  <path
                    d="M37.1902 17.091L35.9756 11.9717C32.6356 12.574 30.6315 14.3205 29.1133 16.7899L28.0809 12.2728H24.1335V33.9546H29.2955V21.608C31.0566 18.958 33.9716 17.2717 37.1902 17.091Z"
                    fill="#323134"
                  />
                  <path
                    d="M27.4736 9.86359L26.2591 5.04541H0.449341V9.86359H10.1659V33.9545H15.6315V9.86359H27.4736Z"
                    fill="#323134"
                  />
                </g>
              </svg>
            </div>
            <p>4.5 Star Rating</p>
          </div>
          </AnimateContent>
          
        </div>

        <br />
        <AnimateContent>
        <Button
          params={"btn-signup"}
          name={"Sign Up Now"}
          svg={
            <svg
              className="inline"
              width="50px"
              height="50px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0" />

              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M6.5 12H17"
                  stroke="#000"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />{" "}
                <path
                  d="M12.9117 8L17.5 12L12.9117 16"
                  stroke="#000"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />{" "}
              </g>
            </svg>
          }
          link={"/sign-up"}
        />
        </AnimateContent>
      </div>
    </div>
  );
};

export default Testimonials;
