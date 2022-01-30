import { Link } from 'react-router-dom';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const EventDetail = () => {
  return (
    <div className="simple container text-center d-flex flex-column gap-5">
      <Nav />
      <main class="detalles_cuerpo">
        <section>
          <div class="row row-cols-1 row-cols-md-2 g-4">
            <div class="col-md-8">
              <div class="card">
                <img src="concert.png" class="card-img-top" alt="..." />
                <div class="card-body">
                  <div class="row">
                    <div class="col-md-10">
                      <h2 class="card-title">Concierto de Rock</h2>
                    </div>
                    <div class="col-md-2">
                      <button
                        class="btn btn-danger"
                        data-bs-toggle="modal"
                        data-bs-target="#shareModal"
                      >
                        <i class="bi bi-share"></i>
                      </button>
                      <div
                        class="modal fade"
                        id="shareModal"
                        tabindex="-1"
                        aria-labelledby="shareModalLabel"
                        aria-hidden="true"
                      >
                        <div class="modal-dialog modal-dialog-centered modal-lg">
                          <div class="modal-content">
                            <div class="modal-header text-danger flex-column">
                              <h4
                                class="modal-title text-center fw-bold"
                                id="shareModal"
                              >
                                Compartir en:
                              </h4>
                            </div>
                            <div class="modal-body text-dark">
                              <div class="d-flex flex-column flex-md-row flex-wrap flex-md-nowrap justify-content-center justify-content-md-around">
                                <button class="btn btn-light d-flex flex-column align-items-center">
                                  <svg
                                    width="60"
                                    height="60"
                                    viewBox="0 0 100 100"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <g clip-path="url(#clip0_171_532)">
                                      <path
                                        d="M94.4809 100C97.5285 100 100 97.5293 100 94.4812V5.51914C100 2.4707 97.5285 0 94.4809 0H5.51914C2.47031 0 0 2.4707 0 5.51914V94.4812C0 97.5293 2.47031 100 5.51914 100H94.4809Z"
                                        fill="#395185"
                                      />
                                      <path
                                        d="M68.9981 100V61.275H81.997L83.9431 46.1832H68.9981V36.5473C68.9981 32.1777 70.2118 29.2 76.4778 29.2L84.4696 29.1965V15.6984C83.0868 15.5145 78.3431 15.1035 72.8243 15.1035C61.3017 15.1035 53.4134 22.1367 53.4134 35.0531V46.1832H40.3813V61.275H53.4134V100H68.9981Z"
                                        fill="white"
                                      />
                                    </g>
                                    <defs>
                                      <clipPath id="clip0_171_532">
                                        <rect
                                          width="100"
                                          height="100"
                                          fill="white"
                                        />
                                      </clipPath>
                                    </defs>
                                  </svg>
                                  <span class="mt-2">Facebook</span>
                                </button>
                                <button class="btn btn-light d-flex flex-column align-items-center">
                                  <svg
                                    width="60"
                                    height="60"
                                    viewBox="0 0 100 100"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <g clip-path="url(#clip0_171_537)">
                                      <path
                                        d="M26.4311 85.6459L28.0659 86.454C34.8784 90.4938 42.5077 92.3791 50.1374 92.3791C74.1159 92.3791 93.7346 72.9876 93.7346 49.2869C93.7346 37.9753 89.1022 26.9328 80.928 18.8529C72.7534 10.773 61.8538 6.19458 50.1374 6.19458C26.1589 6.19458 6.53972 25.5861 6.81238 49.5564C6.81238 57.6359 9.26472 65.4467 13.3518 72.1795L14.4417 73.7957L10.0823 89.6861L26.4311 85.6459Z"
                                        fill="#00E676"
                                      />
                                      <path
                                        d="M85.5598 14.5436C76.2953 5.11737 63.4887 0 50.4094 0C22.6164 0 0.272656 22.3541 0.544922 49.556C0.544922 58.1745 2.99727 66.5239 7.08477 74.0649L0 99.651L26.4309 92.9178C33.7879 96.9579 41.9621 98.8432 50.1371 98.8432C77.6578 98.8432 100.002 76.4888 100.002 49.2873C100.002 36.09 94.8242 23.7008 85.5602 14.5436H85.5598ZM50.4094 90.4942C43.0523 90.4942 35.6953 88.6093 29.4281 84.8386L27.7934 84.0305L11.9895 88.0703L16.0766 72.7189L14.9867 71.1027C2.99727 51.9807 8.71953 26.6633 28.3383 14.8127C47.957 2.96255 73.298 8.61853 85.2875 28.01C97.2766 47.4015 91.5543 72.449 71.9359 84.2996C65.6684 88.3394 58.0391 90.4938 50.4094 90.4938V90.4942ZM74.3879 60.5992L71.3906 59.2525C71.3906 59.2525 67.0312 57.3672 64.3062 56.0205C64.0336 56.0205 63.7613 55.751 63.4887 55.751C62.6711 55.751 62.1262 56.0205 61.5812 56.29C61.5812 56.29 61.309 56.5591 57.4941 60.8683C57.2215 61.4069 56.6766 61.6764 56.1316 61.6764H55.859C55.5867 61.6764 55.0418 61.4069 54.7691 61.1378L53.4066 60.5992C50.4094 59.2525 47.6848 57.6363 45.5047 55.4819C44.9598 54.9432 44.1422 54.4046 43.5973 53.866C41.6898 51.9807 39.7824 49.8259 38.4203 47.4019L38.1477 46.8633C37.8754 46.5938 37.8754 46.3247 37.6027 45.7861C37.6027 45.2475 37.6027 44.7089 37.8754 44.4394C37.8754 44.4394 38.9652 43.0927 39.7824 42.2849C40.3277 41.7459 40.6 40.9382 41.1449 40.3996C41.6898 39.5915 41.9625 38.5143 41.6898 37.7062C41.4176 36.3595 38.1477 29.0876 37.3305 27.4718C36.7852 26.6637 36.2406 26.3946 35.423 26.1251H32.4258C31.8805 26.1251 31.3359 26.3946 30.7906 26.3946L30.518 26.6637C29.973 26.9332 29.4281 27.4718 28.8832 27.7409C28.3383 28.2799 28.0656 28.8181 27.5207 29.3571C25.6133 31.7811 24.5234 34.7436 24.5234 37.7062C24.5234 39.8606 25.0684 42.0154 25.8859 43.9008L26.1586 44.7089C28.6109 49.8259 31.8805 54.4046 36.2406 58.4444L37.3305 59.5216C38.1477 60.3297 38.9652 60.8683 39.5102 61.6761C45.2324 66.5243 51.7719 70.0255 59.1289 71.9108C59.9465 72.1799 61.0363 72.1799 61.8539 72.4494H64.5785C65.941 72.4494 67.5758 71.9108 68.666 71.3722C69.4832 70.8336 70.0281 70.8336 70.5731 70.295L71.1184 69.756C71.6633 69.2174 72.2082 68.9483 72.7531 68.4097C73.298 67.871 73.843 67.3324 74.1156 66.7934C74.6605 65.7162 74.9328 64.3695 75.2055 63.0232V61.1378C75.2055 61.1378 74.9328 60.8683 74.3879 60.5992Z"
                                        fill="white"
                                      />
                                    </g>
                                    <defs>
                                      <clipPath id="clip0_171_537">
                                        <rect
                                          width="100"
                                          height="100"
                                          fill="white"
                                        />
                                      </clipPath>
                                    </defs>
                                  </svg>
                                  <span class="mt-2">WhatsApp</span>
                                </button>
                                <button class="btn btn-light d-flex flex-column align-items-center">
                                  <svg
                                    width="60"
                                    height="60"
                                    viewBox="0 0 100 100"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <g clip-path="url(#clip0_171_542)">
                                      <path
                                        d="M100 12.177C96.3203 14.1756 92.3664 15.5263 88.2164 16.134C92.4527 13.0239 95.7055 8.09905 97.2371 2.23111C93.21 5.15831 88.8039 7.22071 84.2094 8.3292C80.4668 3.44546 75.1352 0.393311 69.234 0.393311C57.9035 0.393311 48.7172 11.645 48.7172 25.5225C48.7172 27.4924 48.8988 29.4101 49.2484 31.2498C32.1977 30.2014 17.0805 20.1971 6.96133 4.99331C5.1957 8.70479 4.18398 13.022 4.18398 17.6268C4.18398 26.3455 7.80625 34.0369 13.3109 38.5436C10.0529 38.4186 6.8666 37.3407 4.01797 35.4C4.0168 35.5053 4.0168 35.6105 4.0168 35.7163C4.0168 47.8919 11.0887 58.0488 20.4738 60.3574C17.4527 61.3638 14.2837 61.5111 11.209 60.7881C13.8195 70.7718 21.3965 78.0369 30.3738 78.2402C23.3523 84.9799 14.5059 88.9976 4.89414 88.9976C3.23789 88.9976 1.60508 88.8785 0 88.6464C9.0793 95.7766 19.8633 99.9369 31.4492 99.9369C69.1863 99.9369 89.8219 61.6445 89.8219 28.4369C89.8219 27.3469 89.8023 26.2632 89.7625 25.1857C93.779 21.6291 97.2458 17.224 100 12.177Z"
                                        fill="#55ACEE"
                                      />
                                    </g>
                                    <defs>
                                      <clipPath id="clip0_171_542">
                                        <rect
                                          width="100"
                                          height="100"
                                          fill="white"
                                        />
                                      </clipPath>
                                    </defs>
                                  </svg>
                                  <span class="mt-2">Twitter</span>
                                </button>
                                <button class="btn btn-light d-flex flex-column align-items-center">
                                  <svg
                                    width="60"
                                    height="60"
                                    viewBox="0 0 100 100"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M50 9.00937C63.3504 9.00937 64.9316 9.06016 70.2039 9.30039C75.0789 9.52305 77.7266 10.3375 79.4887 11.0223C81.8223 11.9293 83.4879 13.0129 85.2375 14.7625C86.9875 16.5121 88.0707 18.1777 88.9777 20.5113C89.6625 22.2734 90.477 24.9211 90.6996 29.7957C90.9398 35.0684 90.9906 36.6496 90.9906 50C90.9906 63.3508 90.9398 64.932 90.6996 70.2043C90.477 75.0793 89.6625 77.7266 88.9777 79.4887C88.0707 81.8223 86.9871 83.4883 85.2375 85.2379C83.4879 86.9875 81.8223 88.0711 79.4887 88.9777C77.7266 89.6625 75.0789 90.4773 70.2039 90.6996C64.9324 90.9402 63.3512 90.991 50 90.991C36.6484 90.991 35.0672 90.9402 29.7957 90.6996C24.9207 90.477 22.2734 89.6625 20.5113 88.9777C18.1777 88.0711 16.5117 86.9875 14.7621 85.2379C13.0125 83.4879 11.9289 81.8223 11.0223 79.4887C10.3375 77.727 9.52266 75.0793 9.30039 70.2043C9.05977 64.932 9.00898 63.3508 9.00898 50C9.00898 36.6496 9.05977 35.0684 9.30039 29.7961C9.52305 24.9211 10.3375 22.2734 11.0223 20.5113C11.9289 18.1777 13.0125 16.5121 14.7621 14.7625C16.5121 13.0125 18.1777 11.9293 20.5113 11.0223C22.273 10.3375 24.9207 9.52305 29.7957 9.30039C35.068 9.06016 36.6492 9.00937 50 9.00937ZM50 0C36.4207 0 34.718 0.0574219 29.3852 0.300781C24.0629 0.54375 20.4281 1.38906 17.248 2.625C13.9598 3.90273 11.1715 5.6125 8.3918 8.39219C5.61211 11.1719 3.90273 13.9602 2.625 17.248C1.38867 20.4285 0.54375 24.0633 0.300781 29.3852C0.0574219 34.718 0 36.4207 0 50C0 63.5793 0.0574219 65.282 0.300781 70.6148C0.54375 75.9371 1.38867 79.5719 2.625 82.752C3.90234 86.0398 5.61211 88.8285 8.3918 91.6082C11.1715 94.3879 13.9598 96.0973 17.248 97.375C20.4285 98.6113 24.0629 99.4562 29.3848 99.6992C34.718 99.9426 36.4207 100 50 100C63.5793 100 65.282 99.9426 70.6148 99.6992C75.9367 99.4562 79.5715 98.6113 82.7516 97.375C86.0398 96.0977 88.8281 94.3879 91.6078 91.6082C94.3875 88.8285 96.0973 86.0402 97.375 82.752C98.6109 79.5715 99.4562 75.9371 99.6992 70.6152C99.9426 65.282 100 63.5793 100 50C100 36.4207 99.9426 34.718 99.6992 29.3852C99.4562 24.0633 98.6109 20.4285 97.375 17.2484C96.0973 13.9602 94.3875 11.1719 91.6078 8.39219C88.8281 5.6125 86.0398 3.90234 82.752 2.625C79.5715 1.38906 75.9367 0.54375 70.6148 0.300781C65.282 0.0574219 63.5793 0 50 0ZM50 24.3242C35.8195 24.3242 24.3242 35.8203 24.3242 50C24.3242 64.1805 35.8195 75.6758 50 75.6758C64.1801 75.6758 75.6758 64.1805 75.6758 50C75.6758 35.8199 64.1801 24.3242 50 24.3242ZM50 66.6668C40.7953 66.6668 33.3332 59.2047 33.3332 50C33.3332 40.7953 40.7953 33.3332 50 33.3332C59.2047 33.3332 66.6668 40.7953 66.6668 50C66.6668 59.2047 59.2047 66.6668 50 66.6668ZM82.6898 23.3098C82.6898 26.6238 80.0039 29.3098 76.6898 29.3098C73.3762 29.3098 70.6898 26.6238 70.6898 23.3098C70.6898 19.9961 73.3762 17.3098 76.6898 17.3098C80.0039 17.3098 82.6898 19.9961 82.6898 23.3098Z"
                                      fill="#0A0A08"
                                    />
                                  </svg>
                                  <span class="mt-2">Instagram</span>
                                </button>
                                <button class="btn btn-light d-flex flex-column align-items-center">
                                  <svg
                                    width="60"
                                    height="60"
                                    viewBox="0 0 110 110"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M27.5 22.7495V16.0417C27.5 14.2184 28.2243 12.4697 29.5136 11.1804C30.803 9.89108 32.5516 9.16675 34.375 9.16675H93.9583C95.7817 9.16675 97.5304 9.89108 98.8197 11.1804C100.109 12.4697 100.833 14.2184 100.833 16.0417V75.6251C100.833 77.4484 100.109 79.1971 98.8197 80.4864C97.5304 81.7758 95.7817 82.5001 93.9583 82.5001H87.1223"
                                      stroke="black"
                                      stroke-width="4"
                                    />
                                    <path
                                      d="M80.2082 22.9167H16.0415C12.2445 22.9167 9.1665 25.9948 9.1665 29.7917V93.9584C9.1665 97.7554 12.2445 100.833 16.0415 100.833H80.2082C84.0051 100.833 87.0832 97.7554 87.0832 93.9584V29.7917C87.0832 25.9948 84.0051 22.9167 80.2082 22.9167Z"
                                      stroke="black"
                                      stroke-width="4"
                                      stroke-linejoin="round"
                                    />
                                    <path
                                      d="M42.2578 52.9605L54.3853 40.3334C57.7128 37.0082 63.1784 37.0792 66.5953 40.4984C70.0145 43.913 70.0878 49.3809 66.7603 52.7084L62.3832 57.3444"
                                      stroke="black"
                                      stroke-width="4"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                    />
                                    <path
                                      d="M30.8592 65.8784C29.6905 67.0472 27.2728 69.3847 27.2728 69.3847C23.9453 72.7076 23.8536 78.6384 27.2728 82.0576C30.6874 85.4722 36.1553 85.5455 39.4828 82.218L51.317 71.4747"
                                      stroke="black"
                                      stroke-width="4"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                    />
                                    <path
                                      d="M42.7689 64.9185C41.2475 63.4056 40.3272 61.3917 40.1793 59.2512C40.0911 58.0506 40.2619 56.8451 40.6803 55.7162C41.0986 54.5874 41.7546 53.5617 42.6039 52.7085"
                                      stroke="black"
                                      stroke-width="4"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                    />
                                    <path
                                      d="M51.1543 59.2646C54.5689 62.6815 54.6445 68.1494 51.317 71.4746"
                                      stroke="black"
                                      stroke-width="4"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                    />
                                  </svg>
                                  <span class="mt-2">Copiar link</span>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p class="card-text">
                    Luego de 2 años sin tener un concierto presencial, Adrián
                    Bello vuelve con toda su banda y se presenta en el Centro de
                    Convenciones Barranco. Todo lo que sube, Brasil,
                    Explosion,Escondidos, entre otros, son algunos de los temas
                    que el artistapodrá por fin tocar en vivo en un reencuentro
                    muy especial con su público
                  </p>
                  <h4 class="card-title">Información Adicional</h4>
                  <p class="card-text">
                    Evento apto para mayores de 18 años. <br />
                    <br />
                    Link de la redes sociales de la banda:
                    <br />
                    https://twitter.com
                    <br />
                    https://instagram.com
                    <br />
                    https://facebook.com
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card">
                <div class="card-body">
                  <h3 class="card-title">Concierto de Rock</h3>
                  <p class="card-text">
                    Fecha: Lunes 20 de diciembre, 2021 <br />
                    Hora: 5:00pm
                  </p>
                  <h4 class="card-title">Entradas</h4>
                  <div class="row">
                    <div class="col-md-8">
                      <p>General: S/.60</p>
                    </div>
                    <div class="col-md-4">
                      <select
                        class="form-select d-block h-60"
                        id="state"
                        required
                      >
                        <option value="">0</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-8">
                      <p>VIP: S/.90</p>
                    </div>
                    <div class="col-md-4">
                      <select
                        class="form-select d-block h-60"
                        id="state"
                        required
                      >
                        <option value="">0</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-8">
                      <p>Platinum: S/.120</p>
                    </div>
                    <div class="col-md-4">
                      <select
                        class="form-select d-block h-60"
                        id="state"
                        required
                      >
                        <option value="">0</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                    </div>
                  </div>
                  <div class="custom-control custom-checkbox" id="checkbox2">
                    <div class="row">
                      <div class="col-md-1">
                        <input
                          type="checkbox"
                          class="custom-control-input"
                          id="save-info"
                        />
                      </div>
                      <div class="col-md-11">
                        <p style="font-size: 0.8rem">
                          Te informamos que tus datos personales seran
                          compartidos con el organizador del evento
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-12" id="btnComprar">
                    <button class="btn btn-danger">Comprar Ahora</button>
                  </div>
                  <div
                    class="col-md-12 mt-4 pt-3"
                    style="border-top: 4px solid #21262a"
                  >
                    <h4 class="card-title">Lima, PE</h4>
                    <p>C.C Barranco - Av. República de Panamá 220, Barranco</p>
                  </div>
                  <div
                    id="map-container-google-1"
                    class="z-depth-1-half map-container col-md-12"
                    style="width: 122%"
                  >
                    <iframe
                      src="https://maps.google.com/maps?q=manhatan&t=&z=13&ie=UTF8&iwloc=&output=embed"
                      frameborder="0"
                      style="border: 0"
                      allowfullscreen
                    ></iframe>
                  </div>
                  <div class="col-md-12">
                    <div class="row">
                      <div class="col-md-3">
                        <i
                          class="bi bi-person-fill"
                          style="font-size: 3rem"
                        ></i>
                      </div>
                      <div class="col-md-9 mt-2">
                        <h6>Organizado por:</h6>
                        <p>Concerts</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default EventDetail;