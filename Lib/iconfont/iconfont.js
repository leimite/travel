;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-xiangyou" viewBox="0 0 1000 1000">' +
    '' +
    '<path d="M349.5284 931.0338 288.0295 869.6104l386.4838-385.9333L288.0295 97.7437l61.4988-61.4224 448.0066 447.3567L349.5284 931.0338z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-fanhui" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M339.147444 146.918004 18.764291 467.303417c-25.023576 25.023576-25.023576 65.594773 0 90.618349l320.383152 320.383152c25.023576 25.019055 65.594773 25.019055 90.618349 0 25.025837-25.023576 25.025837-65.597033 0-90.618349l-211.000512-210.998252 742.381916 0c35.390163 0 64.077987-28.687823 64.077987-64.077987s-28.685563-64.077987-64.077987-64.077987L218.76528 448.532344l210.998252-210.998252c12.511788-12.511788 18.768812-28.911611 18.768812-45.306914 0-16.397563-6.254764-32.797386-18.766552-45.309174C404.739956 121.894428 364.17328 121.894428 339.147444 146.918004z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-fanhui1" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M511.999488 885.343033 511.151168 886.191354 191.344444 566.384631 511.151168 246.576885 511.999488 247.425206 511.999488 175.066201 511.151168 174.21788 118.98544 566.384631 511.151168 958.550359 511.999488 957.702038Z"  ></path>' +
    '' +
    '<path d="M315.492976 540.801976l605.063559 0 0 51.16531-605.063559 0 0-51.16531Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-fill85" viewBox="0 0 1050 1024">' +
    '' +
    '<path d="M1030.283264 461.5424C1044.798464 446.2848 1050.148864 428.4672 1045.080064 412.672 1039.985664 396.8256 1025.188864 385.4336 1004.427264 381.44L756.056064 334.0288C733.528064 329.9328 703.832064 308.4544 692.491264 288.128L545.240064 22.528C541.835264 16.4352 535.384064 12.6464 528.446464 12.6464 521.432064 12.6464 515.032064 16.4096 511.652864 22.5024L364.094464 288.0512C352.702464 308.4544 322.955264 329.9328 300.299264 334.08L51.595264 381.44C31.140864 385.4336 16.446464 396.8 11.326464 412.5696 6.180864 428.3392 11.428864 446.1568 25.739264 461.5168L198.590464 644.6848C214.334464 661.3248 225.752064 696.2688 223.038464 719.3344L191.627264 967.8336C188.785664 989.6704 195.800064 1002.9312 202.225664 1010.2272 215.179264 1025.0496 237.502464 1028.096 259.800064 1017.6768L488.868864 911.1808C508.939264 901.7856 547.492864 901.7856 567.691264 911.1808L796.632064 1017.6768C805.592064 1021.8752 814.398464 1024 822.744064 1024 835.288064 1024 846.449664 1019.1104 854.232064 1010.2528 860.657664 1002.9568 867.697664 989.696 864.856064 967.936L833.444864 719.2576C830.449664 696.4224 841.892864 661.5552 857.944064 644.6336L1030.283264 461.5424 1030.283264 461.5424ZM830.040064 618.2656C806.129664 643.4304 790.897664 689.9968 795.326464 724.1472L826.763264 972.8256C827.736064 980.0448 826.328064 983.808 825.380864 984.9088 823.486464 987.008 817.931264 985.2672 812.888064 982.8864L583.896064 876.3904C568.689664 869.3248 548.926464 865.408 528.216064 865.408 507.531264 865.408 487.793664 869.3248 472.638464 876.3904L243.544064 982.8864C235.480064 986.7008 232.331264 986.3936 231.102464 984.9088 230.129664 983.8336 228.747264 980.0704 229.745664 972.7488L261.131264 723.9936C265.201664 689.5104 249.995264 643.0976 226.494464 618.3168L53.771264 435.2256C47.960064 429.0048 47.627264 425.1136 47.832064 424.4224 48.088064 423.7056 50.648064 420.7616 58.891264 419.1488L307.339264 371.84C341.028864 365.696 380.657664 337.1008 397.579264 306.7648L528.420864 71.3984 658.955264 306.816C675.851264 337.1008 715.480064 365.696 749.016064 371.7888L997.182464 419.1488C1005.630464 420.7616 1008.318464 423.7568 1008.497664 424.4224 1008.702464 425.0368 1008.292864 428.9536 1002.379264 435.2L830.040064 618.2656 830.040064 618.2656Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-fenxiang" viewBox="0 0 1304 1024">' +
    '' +
    '<path d="M1117.935878 517.974163c-18.747274 0-33.94056 15.198212-33.94056 33.94056l0 320.886896c0 41.176451-33.499349 74.677442-74.6758 74.677442L293.07567 947.479061c-41.176451 0-74.669232-33.500991-74.669232-74.677442L218.406437 198.991189c0-41.176451 33.492781-74.669232 74.669232-74.669232l233.46245 0c18.740706 0 33.938918-15.198212 33.938918-33.947128 0-18.742348-15.198212-33.940396-33.938918-33.940396l-233.46245 0c-78.60302 0-142.556921 63.94881-142.556921 142.556756l0 673.81043c0 78.609753 63.9539 142.556921 142.556921 142.556921l716.244012 0c78.609589 0 142.556756-63.947168 142.556756-142.556921l0-320.886896C1151.876274 533.172374 1136.684959 517.974163 1117.935878 517.974163L1117.935878 517.974163zM405.657345 716.867487c-3.375009 18.443829 8.836368 36.129702 27.273465 39.50471 2.066483 0.376515 4.121307 0.557302 6.154621 0.557302 16.067169 0 30.345028-11.459988 33.345164-27.830767 0.258618-1.426259 27.188901-144.177266 120.918869-286.098889 54.540362-82.586726 120.633651-148.258672 196.443759-195.199928 72.357268-44.805152 154.139732-72.693882 243.950691-83.331382l-110.502057 114.006456c-13.047165 13.461775-12.710551 34.950567 0.751224 47.997732 6.589099 6.388444 15.106915 9.569366 23.613238 9.569366 8.869537 0 17.725609-3.45284 24.377762-10.32059l171.075858-176.497481c0.122823-0.129227 0.23875-0.265186 0.363215-0.40131 0.174218-0.180786 0.348273-0.369783 0.517401-0.557302 0.187355-0.207387 0.369783-0.421342 0.557137-0.635133 0.026601-0.031527 0.051395-0.064696 0.077996-0.089654 0.16765-0.207223 0.336778-0.407878 0.505906-0.615101 0.180786-0.220688 0.361573-0.447779 0.530701-0.675035 0.16765-0.213955 0.323478-0.427746 0.485874-0.64006 0.187355-0.260424 0.374709-0.525775 0.557137-0.784393 0.116091-0.17586 0.238914-0.356647 0.356483-0.530865 0.116255-0.175696 0.238914-0.349915 0.348437-0.532343 0.039737-0.058128 0.077996-0.129227 0.124301-0.194087 0.024795-0.044663 0.058128-0.097864 0.084564-0.14926 0.109523-0.167486 0.212313-0.343182 0.31691-0.517401 0.174218-0.305252 0.349915-0.603607 0.517401-0.900648 0.097864-0.175696 0.188997-0.349915 0.278651-0.519043 0.033169-0.064696 0.071264-0.129391 0.104432-0.194087 0.122823-0.245482 0.25205-0.492606 0.374873-0.738088 0.0977-0.207387 0.195565-0.414774 0.291787-0.621997 0.136123-0.285219 0.265515-0.56387 0.389816-0.855821 0.10279-0.232346 0.194087-0.466005 0.290309-0.706561 0.111165-0.26535 0.213955-0.530865 0.318388-0.796051 0.096058-0.26535 0.194087-0.530701 0.285219-0.797693 0.082922-0.245482 0.167486-0.490964 0.245318-0.731356 0.097864-0.291951 0.187519-0.588993 0.271919-0.88078 0.06486-0.233659 0.129555-0.460915 0.194251-0.693261 0.084564-0.305087 0.16256-0.615265 0.233824-0.927085 0.044663-0.187519 0.091296-0.374873 0.135959-0.564034 0.0133-0.051395 0.020033-0.109359 0.033169-0.160754 0.064696-0.291951 0.122659-0.590471 0.180786-0.887348 0.031527-0.169292 0.064531-0.343346 0.0977-0.512475 0.018226-0.136123 0.038095-0.26535 0.064696-0.40131 0.031527-0.233988 0.064696-0.466005 0.10279-0.699829 0.020033-0.14926 0.044663-0.305252 0.064696-0.459601 0.026437-0.220523 0.051395-0.434314 0.077996-0.655002 0.0133-0.129391 0.020033-0.258782 0.033169-0.381441 0.011494-0.117897 0.02463-0.227091 0.031363-0.343346 0.006896-0.066173 0.013465-0.130869 0.020033-0.195565 0.019868-0.296877 0.038095-0.588828 0.057963-0.887348 0-0.044663 0-0.091296 0.006896-0.135959 0.006568-0.180951 0.0133-0.363379 0.019704-0.544001 0 0 0-0.0133 0.00509-0.019868 0.006732-0.361573 0.0133-0.718055 0.0133-1.08127l0-0.0133 0-0.024959c0-0.557302-0.0133-1.107871-0.038095-1.665173-0.006896-0.046305-0.006896-0.091132-0.013465-0.135959-0.006568-0.104432-0.006568-0.207223-0.0133-0.305087 0-0.0133 0-0.026437 0-0.026437-0.024795-0.394742-0.058128-0.776347-0.096058-1.159266-0.0133-0.116091-0.026601-0.232346-0.039901-0.343511l0-0.006404c-0.006732-0.058128-0.006732-0.116091-0.013136-0.174218-0.044991-0.349915-0.08949-0.699829-0.142692-1.049744-0.018226-0.14926-0.038095-0.305087-0.064696-0.454347-0.006732-0.064696-0.018226-0.122823-0.031527-0.187355-0.044827-0.297041-0.104432-0.588993-0.155992-0.880616-0.037931-0.194087-0.077996-0.388174-0.116091-0.57717 0-0.031527-0.0133-0.057963-0.020033-0.083086-0.013136-0.066173-0.026437-0.124301-0.037931-0.182428-0.046633-0.220523-0.098029-0.434479-0.14926-0.646792-0.084728-0.356483-0.17586-0.712965-0.272083-1.069612-0.039737-0.135959-0.077832-0.271919-0.117733-0.407878-0.116091-0.414774-0.245482-0.82922-0.381441-1.237262-0.026601-0.077996-0.051559-0.155992-0.077996-0.233824-0.097864-0.291951-0.187355-0.582096-0.298519-0.874047-0.011658-0.033169-0.024795-0.064696-0.038095-0.098029-0.044663-0.129227-0.097864-0.251886-0.14926-0.374709-0.0133-0.046305-0.031527-0.084564-0.051395-0.129391-0.116091-0.305087-0.233824-0.610339-0.356483-0.907216-0.071428-0.169128-0.155828-0.336614-0.227256-0.505906-0.006568-0.013136-0.0133-0.026437-0.0133-0.026437-0.140885-0.316582-0.271919-0.621997-0.419536-0.925443 0 0-0.006568-0.013136-0.006568-0.019868-0.318388-0.660256-0.668302-1.30869-1.030039-1.950392l0-0.006568c-0.26026-0.459437-0.532343-0.912142-0.810994-1.366489-0.031363-0.044827-0.064531-0.091132-0.089326-0.136123-0.16256-0.252214-0.32512-0.510833-0.492606-0.764525l-0.033333-0.044663c-0.084728-0.122823-0.167486-0.247124-0.258618-0.376515-0.091132-0.129391-0.194087-0.26535-0.291951-0.40131-0.071264-0.098029-0.142527-0.200819-0.213791-0.298519-0.071428-0.096222-0.136123-0.194087-0.207223-0.283741-0.071428-0.097864-0.142692-0.195565-0.220688-0.291787-0.174054-0.233824-0.361573-0.461079-0.543837-0.686529-0.096058-0.117733-0.187519-0.233824-0.285219-0.350079-0.051395-0.071099-0.109523-0.135795-0.160754-0.207223-0.233988-0.26535-0.472738-0.532343-0.706561-0.797693-0.06486-0.071428-0.122823-0.142692-0.187355-0.207387-0.32512-0.361573-0.661898-0.711487-1.005081-1.054834-0.024959-0.033169-0.058128-0.059605-0.089654-0.091132-0.363051-0.363215-0.732998-0.719862-1.114439-1.069612-0.019868-0.011658-0.033169-0.024959-0.046305-0.038095-0.388009-0.349915-0.776183-0.686693-1.179135-1.016739-0.018391-0.019868-0.044663-0.039737-0.064696-0.059605-0.381441-0.310178-0.771093-0.615429-1.165999-0.912306-0.051395-0.039737-0.10279-0.084564-0.160918-0.124301-0.356483-0.26535-0.719533-0.517401-1.08948-0.769615-0.102955-0.077996-0.207387-0.14926-0.316746-0.220523-0.180786-0.122659-0.363215-0.247124-0.550734-0.363215-0.142692-0.097864-0.291951-0.180786-0.441211-0.271919-0.16765-0.104432-0.33021-0.207387-0.499338-0.305252-0.147618-0.08949-0.290309-0.180622-0.439405-0.26535-0.16256-0.089654-0.323314-0.174218-0.485874-0.26535-0.194087-0.109523-0.394742-0.213955-0.590471-0.31691-0.283577-0.155828-0.568796-0.298683-0.854015-0.441211-0.220688-0.109359-0.441375-0.207387-0.661734-0.310178-0.272083-0.131033-0.544001-0.253692-0.816084-0.369783-0.245318-0.111165-0.499174-0.213955-0.751224-0.31182-0.245318-0.102955-0.499174-0.207387-0.751224-0.296877-0.278651-0.111165-0.557302-0.207387-0.842521-0.305252-0.227256-0.084564-0.459437-0.162396-0.686693-0.233988-0.14926-0.051395-0.291787-0.096058-0.441211-0.14105L879.557712 10.560982c-17.797037-5.902242-37.005391 3.744956-42.899587 21.533619-5.902406 17.797037 3.744792 36.998823 21.533455 42.899587l100.207903 33.22234c-73.659226 15.916431-142.006351 43.26937-204.348116 81.866864-84.225298 52.157298-157.353658 124.657093-217.350454 215.503017C435.418471 558.949959 406.823179 710.492343 405.657345 716.867487L405.657345 716.867487zM405.657345 716.867487"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-xiangxia" viewBox="0 0 1025 1024">' +
    '' +
    '<path d="M511.698104 714.792c19.8128-20.3824 38.904-40.0048 57.9776-59.6448 133.1952-137.1568 266.4752-274.2304 399.4688-411.5824 16.6992-17.2464 41.6784-13.0704 51.4224 6.3328 6.36 12.6656 3.768 27.112-6.7904 37.9856-46.5536 47.9472-93.12 95.8816-139.6784 143.8256-112.6768 116.0288-225.3472 232.064-338.0304 348.0864-15.2592 15.712-32.9088 15.6928-48.2256-0.0768C328.598904 615.7568 169.370104 451.7824 10.136504 287.8112c-9.1712-9.4432-12.4304-20.528-8.4944-33.1856 3.6752-11.8208 11.8128-19.2816 24.0336-21.6192 11.2544-2.152 20.5616 1.896 28.4048 9.984 33.4528 34.4992 66.9504 68.9568 100.4304 103.4288 117.72 121.2112 235.4416 242.4224 353.1504 363.6464C508.974904 711.4208 510.120504 712.936 511.698104 714.792z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-iconfont0071" viewBox="0 0 1078 1024">' +
    '' +
    '<path d="M146.473176 421.111646 107.789474 460.102333 492.118582 841.967562C519.240839 869.110029 561.329395 869.110029 588.521364 841.898038L970.105263 460.032808 931.282163 421.181171 566.364591 786.367865 566.364591 0 511.460433 0 511.460433 783.75936 146.473176 421.111646ZM0 970.105263 1077.894737 970.105263 1077.894737 1024 0 1024 0 970.105263Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-xiangxia1" viewBox="0 0 1025 1024">' +
    '' +
    '<path d="M952.7 262.482c14.629 14.654 14.629 38.38 0 53.03L544.976 761.907c-7.811 7.837-18.146 11.139-28.336 10.628-10.19 0.511-20.549-2.792-28.336-10.628L80.581 315.512c-14.603-14.65-14.603-38.376 0-53.03 14.604-14.65 38.307-14.65 52.91 0l383.151 419.494 383.175-419.494C914.421 247.829 938.098 247.829 952.7 262.482z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-paixu" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M947.2 316.928c-21.504 0-39.424 17.408-39.424 39.424s17.408 39.424 39.424 39.424c21.504 0 39.424-17.408 39.424-39.424S968.704 316.928 947.2 316.928z"  ></path>' +
    '' +
    '<path d="M391.168 35.328c0-20.48-6.656-32.768-27.136-32.768-20.48 0-27.136 11.776-27.136 32.768l0 882.176-218.624-190.464c-15.872-13.312-35.84-16.896-48.64-1.024-13.312 15.872-5.632 36.352 10.24 49.664 0 0 261.12 232.96 274.432 232.96 16.384 0 30.208-10.752 35.328-25.088C391.68 977.408 391.168 35.328 391.168 35.328L391.168 35.328z"  ></path>' +
    '' +
    '<path d="M563.712 988.672c0 20.48 6.656 32.768 27.136 32.768 20.48 0 27.136-11.776 27.136-32.768L617.984 105.984l218.624 190.464c15.872 13.312 35.84 16.896 48.64 1.024 13.312-15.872 5.632-36.352-10.24-49.664 0 0-261.12-232.96-274.432-232.96-16.384 0-30.208 10.752-35.328 25.088C563.2 46.592 563.712 988.672 563.712 988.672L563.712 988.672z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-sousuo-sousuo1" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M691.881 249.91c-122.036-122.092-319.94-122.092-442.033 0s-122.093 319.997 0 442.033c56.558 56.574 134.7 91.567 221.017 91.567 86.316 0 164.458-34.994 221.016-91.567 56.575-56.558 91.568-134.701 91.568-221.017 0-86.316-34.994-164.458-91.567-221.016zM181.8 759.992c-74.010-73.991-119.787-176.22-119.787-289.14 0-225.802 183.050-408.852 408.852-408.852 225.803 0 408.852 183.050 408.852 408.852 0 112.92-45.778 215.149-119.787 289.139-73.985 73.966-176.183 119.713-289.065 119.713-112.883 0-215.080-45.747-289.065-119.713zM945.517 945.579c-10.099 10.115-24.058 16.372-39.48 16.372s-29.381-6.257-39.479-16.371l-78.903-78.959c-10.097-10.097-16.342-24.045-16.342-39.452 0-30.814 24.98-55.792 55.792-55.792 15.406 0 29.355 6.245 39.452 16.341l78.958 78.903c10.142 10.087 16.418 24.050 16.418 39.479s-6.277 29.393-16.416 39.477z" fill="#999999" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-sousuo-sousuo" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M716.705 213.684c-138.888-138.934-364.124-138.934-503.059 0s-138.934 364.17 0 503.059c138.914 138.924 364.14 138.924 503.059 0.015v-0.015c138.924-138.904 138.924-364.13 0.015-503.044 0-0.005-0.015-0.005-0.015-0.015zM136.238 794.151c-181.64-181.69-181.64-476.225 0-657.921 181.68-181.64 476.2-181.64 657.921 0 181.65 181.696 181.65 476.23 0 657.921-181.721 181.64-476.235 181.64-657.92 0z m869.113 211.238c-24.836 24.801-65.069 24.801-89.885 0l-89.84-89.885c-24.806-24.822-24.806-65.039 0-89.845 24.801-24.8 65.018-24.8 89.84 0l89.885 89.845c24.863 24.862 24.863 65.069 0 89.885z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-last1" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M891.904 983.04c0 20.48-17.408 35.84-37.888 35.84s-37.888-16.384-37.888-35.84V573.44l-634.88 369.664c-5.12 2.048-10.24 4.096-16.384 4.096-17.408 0-33.792-12.288-33.792-29.696v-808.96c0-17.408 16.384-29.696 33.792-29.696 5.12 0 10.24 1.024 16.384 4.096l634.88 367.616V40.96c0-20.48 17.408-35.84 37.888-35.84s37.888 16.384 37.888 35.84v942.08zM210.944 175.104v673.792l552.96-336.896-552.96-336.896z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-first1" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M861.184 946.176c-5.12 0-11.264-1.024-16.384-4.096L204.8 573.44v409.6c0 20.48-17.408 35.84-37.888 35.84s-37.888-16.384-37.888-35.84V40.96c0-20.48 17.408-35.84 37.888-35.84S204.8 21.504 204.8 40.96v409.6L844.8 81.92c5.12-2.048 10.24-4.096 16.384-4.096 17.408 0 33.792 12.288 33.792 29.696v807.936c0 18.432-16.384 30.72-33.792 30.72z m-46.08-771.072L256 512l559.104 336.896V175.104z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)