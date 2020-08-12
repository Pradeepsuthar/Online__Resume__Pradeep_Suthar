import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  galleryImages:any = [
    {
      imgUrl:'https://lh6.googleusercontent.com/NLB0Ykq9ybmAMOlQOw6o9C8bb5ZwYEFN3DaLwNTp6E0uYZYGgrzB3OWK1vcaqxxhuWEj2f5ADIK0paZf0pQJsuTz3gLY6gEFSZB1IBzHvoHdbgTmuDo=w1280',
    },
    {
      imgUrl:'https://lh4.googleusercontent.com/zuABWFMODk-B4NEBqowSykON2I3rMx31J9iqJWAMA0h_lOoHGSh4ucs7xTcnHovTa_BLMPbYPNmCaDrnimnyQIkj0y4YQQ0DlPoNlrgZKG67OUyjDMU=w1280',
    },
    {
      imgUrl:'https://lh3.googleusercontent.com/dP2L1jBz5_wCsJtCvLP8hciO_XUMeBnYP-K2wBBtnZIxxzO2pv3uJn05j_N-Js5YxcSCL0z0dYoNulDRwMA8Sv_Az6GCo0OnRHrktZOp5uG-ownGQfI=w1280',
    },
    {
      imgUrl:'https://lh3.googleusercontent.com/bHFDTX13vC2yKvXQzX8B4P85ByQcWt9E1VDHXNPknm3GiNQMk5aVCYNdpc2jgj1vkUN2CBDQH8AtAv_Dr9PSTAlI_Z-pXfvQx6mcu04mnoMZ0O-p2NmE=w1280',
    },
    {
      imgUrl:'https://lh5.googleusercontent.com/gwnxQ-meg_WdDBOTKs1RR0qx9u1SDxx8h8gkICc-MdACTenf_syXqWPK40OoWd1t9Yf9Ytjc_CjfcIv5tYfP3Bd4byJhq2gGceEmUkdT-F6cRhKFztg=w1280',
    },
    {
      imgUrl:'https://lh6.googleusercontent.com/OZCa-jtE0yaEWnHLGoTfJjujSAKJcUNPDtTqR2YQoZST8edjYFiaumNJdkOqmBcuNmQgFCQep7XQIih8MAoVM0ULQJdGiyEAK_gA-m_z04Mzx6XauNs=w1280',
    },
    {
      imgUrl:'https://lh3.googleusercontent.com/sFOSAk-H17nd1qgKU8yVVl08DQRnIpvt2GdYzvKub0HZGzo0FeCyjyWcBaCgHBxq_e-p6bh0keDULF86chKkTWvZ9JpMN_Sr_7rsN_WEqT93Uj6wXA=w1280',
    },
    {
      imgUrl:'https://lh5.googleusercontent.com/uADkTF4vSVVKq75TaYY720FCMFmGCXCNJ6cJOlc8EBBY9FLu3DHCL7tmjUBo8nB00SSYN-hdaueuo5bISqAgmmlLTkhD6AywHPRqaopSHQs0S-VvXf8b=w1280',
    },
    {
      imgUrl:'https://lh3.googleusercontent.com/pw/ACtC-3dJa5Y1MyDad8Ib2p_mMwhrp_TsfRZTSqTrjzA7LINSr5X3C2ogft4DST9PLBjPg21Fp2BY-dX3l9gpqxp6YIs-vI4RNR2QKFzZUlf0lUzI4WATy126RFe4sPI3Cx65HjaGqlFCzqw2Smu4_dhCHys6=w952-h635-no?authuser=0',
    },
    {
      imgUrl:'https://lh3.googleusercontent.com/pw/ACtC-3dzvJQ5fWecoinpQ2jz8vkmXYR2omS6gnfO2vA3kIvO3JgQiZJHcHO0dF1RkItgJ_rMi9XrxE73hjBMZVdUzNPCtytIVUgUXT_DfSR7lIOxUpVtaAA7RfJNu_pc6zWGQCFoAwIpnhmbkeZN9gc9QcrJ=w953-h635-no?authuser=0',
    },
    {
      imgUrl:'https://lh3.googleusercontent.com/pw/ACtC-3fm8wYNKvhFHzbCrfR1iiWRnj4GunULz9mJKkzd9NGFtnLSK5OIfF82Jtn1kzpCO_RJYDaPxyIeTeZ9Via-xce93YozTwEmPsEPZrPF9qJJjADyCr0f6jQAwUJv3HR2Rq5FTPcvG-MvMJ71lCBpTrsz=w1017-h635-no?authuser=0',
    },
    {
      imgUrl:'https://lh3.googleusercontent.com/pw/ACtC-3eFYf5ra1YIXmlVd7nmRjGDP6oiyVLwlklbIh5sIuOuHfSAlQD6yaGS-XjbZbMsiBqvTY5b0Ui03DS6jlgjKYuNZP89IxPGFZq3Ofdl_p1fGIbF8zHATqiWqY38wbbNHtrwhzlIVD6dRPMoInah6rg5=w1017-h635-no?authuser=0',
    },
    {
      imgUrl:'https://lh3.googleusercontent.com/pw/ACtC-3cv5ef_KQKZcbPIsta1bKm8eF_hDTyo_uDoVfIoHo106juvfC_gJAVojlbbTCIJSPA--D8HmJfVHRLDqzZVsRJ76J_bzJ03k1btBqCVhJQ0a_zLBhprY6BYGUxyava9ekfaqbBueaj2TWHv-1SLQj3I=w424-h635-no?authuser=0',
    },
    {
      imgUrl:'https://lh3.googleusercontent.com/pw/ACtC-3cP_u6wVpjaYZ5uQg8yhQR1Kfkxmek93tkWUwifDJLFGTtMWwl1xE_wLST0F9HMIdb-EClFbihEWxIY4a_uLeJNWGcLJdnAt4qyeP1c3AClsuFjIle8X8wzCxjtEQ7xMdr03iBplQ1jCCOWUUSY-g0_=w424-h635-no?authuser=0',
    },
    {
      imgUrl:'https://lh3.googleusercontent.com/pw/ACtC-3cQ32i2t09u9uiFfmcqLinbJxg2pHYOc8FHsmJWwEWwAYTKrmPFMiwykK6pQ6ihRO8Be0x7BwYqbXl9tDw-RZ4BYFUUJcYPyt0UgWqzD0ZUz61Q5xPRy2QNElEe6oP8z66ycAZVwmi_pl5zvSiw05zR=w1130-h635-no?authuser=0',
    },
    {
      imgUrl:'https://lh3.googleusercontent.com/pw/ACtC-3f4qhZ0y0-_nA6nzLe9hG6_dy50JzZFnZbjZMminrVNK7EunqNC2srfxkdI1XSEQ3IiTXThmjnH-zLd_dgADFBB8engJXNOeoAbu7HUFY_TJw-vMCleFSMr0Ms1ju0CfXEY3KKhlwGt6N0D5La8p6Jv=w1130-h635-no?authuser=0',
    },
    {
      imgUrl:'https://lh3.googleusercontent.com/pw/ACtC-3fEgjtjkVJyUTRu1NNfjXd99iieNZ_91ZD4jI-Y3hYXl8TniHZvWvYqOFlQGtroQUla4sLkFDd_e3vaJSNZLEZMc7crbjc_bEb48Q4BRWRpuPx9QoDI3gIKW7Q1bdyOAkWMxcLgPKQoBPJAgQ7Lkqx6=w1129-h635-no?authuser=0',
    },
    {
      imgUrl:'https://lh3.googleusercontent.com/pw/ACtC-3fZP5pzzFjCm-BJrCfbOeb2M7OgR_GvHrf-cgbEEyhrMxBsUX2hj06f0CljtuXhAhcSmoaq4qPudhyG-fZBJtppnAI3sAxubkHR_CpStnMVcVcRSCH4j4MVMsGI_2RMpMX2knhl9hb4cLVHjJ_w4zDF=w294-h635-no?authuser=0',
    },
    {
      imgUrl:'https://lh3.googleusercontent.com/pw/ACtC-3dyJ0GMN-F3hqfmZ5fDqefyNcu1oJXnmh_kJSj_sskYoWosJjuoZfUXIs7bOQoEZmioklY5ScDJjeh0EXrzRtt-RqUT1a8MbIEeJwz8dFM3Y0uHpaPuWMPJF2DKBhMrlRv54i_ILI99MilZtxhl-WTx=w1130-h635-no?authuser=0',
    },
    {
      imgUrl:'https://lh3.googleusercontent.com/pw/ACtC-3fQYdRJFafEzgbmSZQFIWRXJNgE_Zpb967lx9Y4cQfLPWWIfbwMt7VD7tmZBQEnqDrOBjB2DuBEfB3LzwF5SB4zpR1pgv2MlPRPjfpSTvb8dsTEPIfxPsR4nHWOckI4kmp4N4F-SvYa5ySuu735DAFY=w1129-h635-no?authuser=0',
    },
    {
      imgUrl:'https://lh3.googleusercontent.com/pw/ACtC-3eEKy-REypd0ihJeJ3_wlvYM5ZnAcfj7USszlPelrpl3xXD7OxJ6kKMLbptFJcaz6ZXlvuPUXVVp7nXg9rhqtgA4xGHhhhgfLjyzyqKATIrnb-yisH8yxuLIbYs3Prze-ywKjtwOZwaWHj9fDRLX8W6=w450-h635-no?authuser=0',
    },
    {
      imgUrl:'https://lh3.googleusercontent.com/pw/ACtC-3c-N-oW3JroI2XqpW5xLaZIuFQgVvWgyImmUBVSd61zeF3gwwJcWJISEZy9ogXUhOMdVIswCr5lzAvUeQRWFvQ8XXD5YL98ISJE8qsuz-OCHAzkNYhFgqnLG0AG8UykdESwMCVHnzdzkcZXOjQNFAoi=w450-h635-no?authuser=0',
    },
    {
      imgUrl:'https://lh3.googleusercontent.com/pw/ACtC-3cxIvaJLXaSD5gvd0GutJnYdGCv16aKDeHvv9W79g5QJGXP1XgfJ5andr-lRNWRNprTClBvB7kFFO0KzgtjAkJR8aOc9QRG6_DqifQyxKOWADQCb6FhCrz0l6xrM74EuIDD7Fh-BQFNyTrJaXTON0eK=w449-h635-no?authuser=0',
    },
    {
      imgUrl:'https://lh3.googleusercontent.com/pw/ACtC-3eLgM5SyzPUpxFBEI6TpahUXqJy1BrKsh2lIyvow-LbZlEhMDXzDMzD_RgsHYj79G0XxBDDp3KQJj8hLjEaGKk9pUgrdJZ41yebTYYqsj4I4ev7jUHss76eglxXR47tQdnUFXjo2QqD9UeZl2nE6Ke1=w449-h635-no?authuser=0',
    },
    {
      imgUrl:'https://lh3.googleusercontent.com/pw/ACtC-3fSZk5rP8fmFPBlJTvdNdesuUD7dhcHIPbulm34WZqjYLxjnibQF6YPXRUeHibJ5Zn_2i6poRDOozgQ0Do58XYgthLMPwOgImSnDmj_oXNKRd_dTwOczj_6SkEH-oEp8V-GRY2M30wlNqPsdRH2XX8G=s635-no?authuser=0',
    },
    {
      imgUrl:'https://lh3.googleusercontent.com/pw/ACtC-3duNkC3PNssxSKd_08cQFUS7-bAVedXMSQ3WWYa_Ug5GeEyMUVkU4n4qtwRSQvBxMqL2i_z1R_Sh0j9QERLvApzKswMf9_xGg0f6AIN9upekQea_zocY-jDtmo50dfKjzlAexJqDI9AyK1Rzk8hVJYc=w449-h636-no?authuser=0',
    },
    {
      imgUrl:'https://lh3.googleusercontent.com/pw/ACtC-3c1TZjIE41ioKsDuB5eFD1vCVFU3CDa-Kv_bkvV1yCA1unfad3KlkK2RHbueJerobnRwk7auCJqgIPXZzRWJup42h9jCUkaDo5pcz7jejbsBgmPrYu6c33WB4b80PBkdR59U9a4jKsXscJK308tV8IB=w409-h635-no?authuser=0',
    },
    {
      imgUrl:'https://lh3.googleusercontent.com/pw/ACtC-3ccsckSNuN8T4-BVYlDRxUXPiMUk9kUonFufgiKLbe9yObYXGAwnnLk_z5jcb2lOuNqdgOZ6SRsiSSdP_gzDTW01gIaTG2Lvdzs1vbzvrnNSdbbIqAjuhqchICcF9uBiY5NMz-UyS4WeTvkDPx7IHtv=w1129-h635-no?authuser=0',
    },
    {
      imgUrl:'https://lh3.googleusercontent.com/pw/ACtC-3fafoGm8Qbla15OmqRhxe8Eq-U-FttaWm_plUDDLwN56Q5v6ndkJrCCpWaYIsGKLMxSXlKsI3paxXoffIXuL_oYzG3JCxyDWFzvAf7dqs15-9hevMSBy8XAmujfmZU00JWoqdkigMNkpfGh_mZPQHfF=w1050-h600-no?authuser=0',
    },
    {
      imgUrl:'https://lh3.googleusercontent.com/pw/ACtC-3dGNeEtGBpyXsEvh1DzvuaG9TOPlLck_j7iRY6K8iC36p9E-gHFvONOZnVFnm8j-PdXUV_Z_n4LSodUwIyf_4FLIkCLyGFQuQDu0rV1eBypAek1UVRfbGmaIX64SjjbmGJk0Vj6rJ1DeEnPfcEpySZc=w1050-h600-no?authuser=0',
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
