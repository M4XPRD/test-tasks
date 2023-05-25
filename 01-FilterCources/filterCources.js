const courses = [
  { name: 'Courses in England', prices: [0, 100] },
  { name: 'Courses in Germany', prices: [500, null] },
  { name: 'Courses in Italy', prices: [100, 200] },
  { name: 'Courses in Russia', prices: [null, 400] },
  { name: 'Courses in China', prices: [50, 250] },
  { name: 'Courses in USA', prices: [200, null] },
  { name: 'Courses in Kazakhstan', prices: [56, 324] },
  { name: 'Courses in France', prices: [null, null] },
];

const minDigit = (value) => (value !== null ? value : 0);
const maxDigit = (value) => (value !== null ? value : Infinity);

const filterByPrice = (data, range) => data.filter((course) => {
  const [minRange, maxRange] = range;
  const [minCourse, maxCourse] = course.prices;

  const normalizedMinRange = minDigit(minRange);
  const normalizedMaxRange = maxDigit(maxRange);
  const normalizedMinCourse = minDigit(minCourse);
  const normalizedMaxCourse = maxDigit(maxCourse);

  return normalizedMinRange <= normalizedMaxCourse
  && normalizedMaxRange >= normalizedMinCourse
  && (normalizedMaxCourse <= normalizedMaxRange || normalizedMaxCourse >= normalizedMaxRange);
});

const sortByMinimumPrice = (data, direction) => (direction === 'top-bottom'
  ? data.sort((a, b) => {
    const lowCourse = minDigit(a.prices[0]);
    const maxCourse = minDigit(b.prices[0]);
    return maxCourse - lowCourse;
  }) : data.sort((a, b) => {
    const lowCourse = minDigit(a.prices[0]);
    const maxCourse = minDigit(b.prices[0]);
    return lowCourse - maxCourse;
  }));

const sortByMaximumPrice = (data, direction) => (direction === 'top-bottom'
  ? data.sort((a, b) => {
    const lowCourse = maxDigit(a.prices[1]);
    const maxCourse = maxDigit(b.prices[1]);
    return maxCourse - lowCourse;
  }) : data.sort((a, b) => {
    const lowCourse = maxDigit(a.prices[1]);
    const maxCourse = maxDigit(b.prices[1]);
    return lowCourse - maxCourse;
  }));

const requiredRange1 = [null, 200];
const requiredRange2 = [100, 350];
const requiredRange3 = [200, null];

console.log(filterByPrice(courses, requiredRange1));
console.log(filterByPrice(courses, requiredRange2));
console.log(filterByPrice(courses, requiredRange3));

const filteredData = filterByPrice(courses, requiredRange1);

console.log(sortByMinimumPrice(filteredData, 'top-bottom'));
console.log(sortByMinimumPrice(filteredData, 'bottom-top'));
console.log(sortByMaximumPrice(filteredData, 'top-bottom'));
console.log(sortByMaximumPrice(filteredData, 'bottom-top'));
