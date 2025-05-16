export const parseBankName = (fetchBank) => {
  const bankMap = {
    "Kookmin Bank": { korean: "국민", english: "kukmin" },
    "Shinhan Bank": { korean: "신한", english: "shinhan" },
    "Hana Bank": { korean: "하나", english: "hana" },
    "Kakao Bank": { korean: "카카오", english: "kakao" },

    국민은행: { korean: "국민", english: "kukmin" },
    신한은행: { korean: "신한", english: "shinhan" },
    하나은행: { korean: "하나", english: "hana" },
    카카오뱅크: { korean: "카카오", english: "kakao" },

    kukmin: { korean: "국민", english: "kukmin" },
    shinhan: { korean: "신한", english: "shinhan" },
    hana: { korean: "하나", english: "hana" },
    kakao: { korean: "카카오", english: "kakao" },
  };

  // 있는 은행일 경우 map return, 없으면 fetchBank 문자열 그대로 보냄
  return (
    bankMap[fetchBank] || {
      korean: fetchBank,
      english: fetchBank.toLowerCase().replace(/\s+/g, ""),
    }
  );
};
