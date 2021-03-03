var input = process.argv[2];

if (input)
  console.log(reverseString(input));

function reverseString(original) {
  return original
    .split("")
    .reverse("")
    .join("");
}
