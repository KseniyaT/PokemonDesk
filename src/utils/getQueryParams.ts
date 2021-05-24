interface IQuery {
  [key: string]: string | number;
}

const getQuery = (obj: IQuery) => {
  let query = '';
  Object.keys(obj).forEach((key) => {
    if (obj[key]) {
      query += `${key}=${obj[key]}&`;
    }
  });
  return query.slice(0, -1);
};

export default getQuery;
