const areEquals = (array1, array2) => {
	if (typeof array1 === "object" && typeof array2 === "object") {
		if (
			array1.length > 0 &&
			array2.length > 0 &&
			array1.length === array2.length &&
			array1.every((el) => array2.includes(el))
		) {
			return true;
		} else return false;
	} else return false;
};

module.exports = { areEquals };
