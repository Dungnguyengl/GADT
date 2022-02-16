import axios from "axios";

async function lessionData (tableInfor, schoolYearId) {
     const link = `ApiGiaoAn/GET_DanhSach?namhocId=${schoolYearId||''}&sParam=${tableInfor||''}`;
     const db = await axios.get(link)
     console.log(db);
     const {GiaoAn_Data, Giao_Vien_ID, Loai_giao_an, Mon_hoc, Nam_hoc_ID, Nam_hoc_NAME, Nam_hoc_chi_tiet, Ten_don_vi, Ten_giao_vien} = db.data[0].JsonData[0]
     return {
          Giao_an:{
               GiaoAn_Data,
               Loai_giao_an,
               Mon_hoc,
          },
          Nam_hoc: {
               Nam_hoc_ID,
               Nam_hoc_NAME,
               Nam_hoc_chi_tiet,
          },
          Giao_vien:{
               Giao_Vien_ID,
               Ten_giao_vien,
               Ten_don_vi,
          },
     }
}

export default lessionData;