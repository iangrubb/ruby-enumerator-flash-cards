
const methodData = {

    easy: [
        {name: "each",
        effect: "Execute a code block for each element in an array",
        description: "Iterates over the array and executes the code block for each element in the array.",
        blockReturnValue: null,
        methodReturnValue: "the initial array.",
        notes: null,
        example: "```\nnumbers = [1, 2, 3]\nnumbers.each{|number| puts number + 1}\n# 2\n# 3\n# 4"},

        {name: "map",
        effect: "Construct a new array based on a one-to-one mapping from an initial array",
        description: "Uses the code block to map each element from the initial array onto a new element, then returns an array of the new elements.",
        blockReturnValue: null,
        methodReturnValue: "an array with the same length as the initial array.",
        notes: null,
        example: "```\nnumbers = [1, 2, 3]\nnumbers.map{|number| number + 1}\n# => [2, 3, 4]"},

        {name: "select",
        effect: "Get the elements of an array that satisfy some condition",
        description: "Returns an array of the elements from the initial array that make the code block return true.",
        blockReturnValue: "a boolean value.",
        methodReturnValue: "a portion of the initial array.",
        notes: null,
        example: "```\nnumbers = [1, 2, 3, 4]\nnumbers.select{|number| number.even?}\n# => [2, 4]"},

        {name: "reject",
        effect: "Get the elements of an array except those that satisfy some condition",
        description: "Returns an array of the elements from the initial array that make the code block return false.",
        blockReturnValue: "a boolean value.",
        methodReturnValue: "a portion of the initial array.",
        notes: null,
        example: "```\nnumbers = [1, 2, 3, 4]\nnumbers.reject{|number| number.even?}\n# => [1, 3]"},

        {name: "find",
        effect: "Find the first element in an array that satisfies some condition",
        description: "Executes the code block for each element in the initial array until true is returned. Returns the element that made the code block return true.",
        blockReturnValue: "a boolean value.",
        methodReturnValue: "an element from the initial array.",
        notes: "If no element is found, nil is returned instead.",
        example: "```\nnumbers = [0, 1, 2, -1, -2]\nnumbers.find{|number| number < 0 }\n# => -1"},
        
        {name: "none?",
        effect: "Determine whether no elements in an array satisfy some condition",
        description: "Executes the code block for each element in the initial array. Returns true just in case no elements make the block return true.",
        blockReturnValue: "a boolean value.",
        methodReturnValue: "a boolean value.",
        notes: null,
        example: "```\nnumbers = [1, 2, 3, 4]\nnumbers.none?{|number| number.even?}\n# => false"},
        
        {name: "all?",
        effect: "Determine whether all elements in an array satisfy some condition",
        description: "Executes the code block for each element in the initial array. Returns true just in case all elements make the block return true.",
        blockReturnValue: "a boolean value.",
        methodReturnValue: "a boolean value.",
        notes: null,
        example: "```\nnumbers = [1, 2, 3, 4]\nnumbers.all?{|number| number.even?}\n# => false"},
        
        {name: "any?",
        effect: "Determine whether any element in an array satisfies some condition",
        description: "Executes the code block for each element in the initial array. Returns true just in case at least one element makes the block return true.",
        blockReturnValue: "a boolean value.",
        methodReturnValue: "a boolean value.",
        notes: null,
        example: "```\nnumbers = [1, 2, 3, 4]\nnumbers.any?{|number| number.even?}\n# => true"},
        
        {name: "one?",
        effect: "Determine whether exactly one element in an array satisfies some condition",
        description: "Executes the code block for each element in the initial array. Returns true just in case exactly one element makes the block return true.",
        blockReturnValue: "a boolean value.",
        methodReturnValue: "a boolean value.",
        notes: null,
        example: "```\nnumbers = [1, 2, 3, 4]\nnumbers.one?{|number| number.even?}\n# => false"},

        {name: "count",
        effect: "Determine how many elements in an array satsify some condition",
        description: "Executes the code block for each element in the initial array. Returns the number of elements that make the block return true.",
        blockReturnValue: "a boolean value.",
        methodReturnValue: "an integer.",
        notes: null,
        example: "```\nnumbers = [1, 2, 3, 4]\nnumbers.count{|number| number.even?}\n# => 2"},
        
        
    ], medium: [

        {name: "max_by",
        effect: "Find the element in the array that maximizes some attribute",
        description: "Executes the code block for each element and compares the return values. Returns the element that makes the block return the greatest value.",
        blockReturnValue: "a value used for comparison.",
        methodReturnValue: "an element from the initial array.",
        notes: null,
        example: "```\nstrings = ['a', 'few', 'test', 'strings']\nstrings.max_by{|string| string.length}\n# => 'strings'"},
        
        {name: "min_by",
        effect: "Find the element in the array that minimizes some attribute",
        description: "Executes the code block for each element and compares the return values. Returns the element that makes the block return the least value.",
        blockReturnValue: "a value used for comparison.",
        methodReturnValue: "an element from the initial array.",
        notes: null,
        example: "```\nstrings = ['a', 'few', 'test', 'strings']\nstrings.min_by{|string| string.length}\n# => 'a'"},

        {name: "sort_by",
        effect: "Sort the elements of the array according to some attribute",
        description: "Executes the code block for each element and compares the return values. Returns a sorting of the initial array based on the order of the returned values from least to greatest.",
        blockReturnValue: "a value used for comparison.",
        methodReturnValue: "a sorting of the initial array.",
        notes: null,
        example: "```\nnumbers = [-2, 0, 2, 1, -1]\nnumbers.sort_by{|number| -number}\n# => [2, 1, 0, -1, -2]"},

        {name: "reduce",
        effect: "Combine the elements of an array",
        description: "Iterates through the array and uses the code block to progressively build an accumulated value.",
        blockReturnValue: "a new version of the accumulated value, based on the previous version of the accumulated value.",
        methodReturnValue: "the final accumulated value.",
        notes: "If called with an argument, that argument is the initial accumulated value. Otherwise, the first element in the array is the initial accumulated value.",
        example: "```\nnumbers = [1, 2, 3, 4]\nnumbers.reduce(0) do |accumulator, number|\n    accumulator + number\nend\n# => 10"},

        {name: "each_with_object",
        effect: "Mutate an object once for each element in an array",
        description: "Called with a mutable object as an argument. Uses the code block to mutate the object for each element in the array.",
        blockReturnValue: "the initial object after some mutation.",
        methodReturnValue: "the initial object after all mutations.",
        example: "```\nnumbers = [1, 2, 3]\nnumbers.each_with_object({}) do |number, object|\n    object[element.to_s] = element\nend\n# => {'1'=>1, '2'=>2, '3'=>3}"},

        {name: "flat_map",
        effect: "Construct a new array based on a one-to-many mapping from an initial array",
        description: "Uses the code block to map each element from the initial array to a new array of elements, all of which will be added to a single returned array.",
        blockReturnValue: "an array of elements.",
        methodReturnValue: "the concatenation of all arrays returned by executing the code block.",
        notes: null,
        example: "```\nnumbers = [1, 2, 3]\nnumbers.flat_map do |number|\n    [number, -number]\nend\n# => [1, -1, 2, -2, 3, -3]"},

        {name: "partition",
        effect: "Divide the elements of an array based on whether they satisfy some condition",
        description: "Uses the code block to partition the elements of the initial array based on whether they make the code block return true or false. Returns these elements sorted into two arrays.",
        blockReturnValue: "a boolean value.",
        methodReturnValue: "an array of two arrays.",
        notes: null,
        example: "```\nnumbers = [1, 2, 3, 4]\nnumbers.partition{|number| number.even?}\n# => [[2, 4], [1, 3]]"},

        {name: "group_by",
        effect: "Group the elements of an array based on whether they share some kind of attribute",
        description: "Executes the code block for each element in the initial array and records the return values. Returns a hash with those return values as keys. Each key points to an array of the elements that produced that return value.",
        blockReturnValue: "values used to group elements from the initial array.",
        methodReturnValue: "a hash with arrays as values.",
        notes: null,
        example: "```\nnumbers = [-2, -1, 0, 2]\nnumbers.group_by do |number|\n    number * number\nend\n# => {4 => [-2, 2], 1 => [-1], 0 => [0]}"},

        {name: "drop_while",
        effect: "Get all the elements of an array, except those that precede the first element that fails to satisfy some condition",
        description: "Executes the code block until an element returns true. Returns the array of elements at or after the index of the element that returned true.",
        blockReturnValue: "a boolean value.",
        methodReturnValue: "a portion of the initial array.",
        notes: null,
        example: "```\nnumbers = [1, 2, 3, -1, -2, -3]\nnumbers.drop_while{|number| number < 3}\n# => [3, -1, -2, -3]"},

        {name: "take_while",
        effect: "Get only the elements of an array that precede the first element that fails to satisfy some condition",
        description: "Executes the code block until an element returns true. Returns the array of elements before the index of the element that returned true.",
        blockReturnValue: "a boolean value.",
        methodReturnValue: "a portion of the initial array.",
        notes: null,
        example: "```\nnumbers = [1, 2, 3, -1, -2, -3]\nnumbers.take_while{|number| number < 3}\n# => [1, 2]"},

        {name: "with_index",
        effect: "Use an explicit index while using an enumerator method",
        description: "When called after another enumerator method, allows the following code block to accept an explicit index.",
        blockReturnValue: null,
        methodReturnValue: null,
        notes: null,
        example: "```\nnumbers = [2, 1, 1, 3]\nnumbers.map.with_index do |number, index|\n    number * index\nend\n# => [0, 1, 2, 9]"},



    ], hard: [

        {name: "each_cons",
        effect: "Execute a code block for consecutive portions of an array",
        description: "Accepts a positive integer as an argument. Iterates over each consecutive portion of the array with length equal to that integer and executes the code block for each portion.",
        blockReturnValue: null,
        methodReturnValue: null,
        notes: null,
        example: "```\nnumbers = [1, 2, 3, 4, 5]\nnumbers.each_cons(3){|triple| puts triple}\n# [1, 2, 3]\n# [2, 3, 4]\n# [3, 4, 5]"},

        {name: "each_slice",
        effect: "Execute a code block for slices of an array",
        description: "Accepts a positive integer as an argument. Slices the array into portions with length equal to the integer, then iterates over these slices and executes the code block for each slice.",
        blockReturnValue: null,
        methodReturnValue: null,
        notes: "The final slice can have length less than the integer argument if the argument doesn't evenly divide the length of the initial array.",
        example: "```\nnumbers = [1, 2, 3, 4, 5]\nnumbers.each_cons(2){|pair| puts pair}\n# [1, 2]\n# [3, 4]\n# [5]"},

        {name: "product",
        effect: "Get all possible pairings of elements from two arrays",
        description: "When called on one array with another array as an arugment, it returns an array of all ways of pairing an element from the first with an element from the second array.",
        blockReturnValue: null,
        methodReturnValue: "an array of arrays of two elements.",
        notes: null,
        example: "```\nnumbers = [1, 2]\nletters = ['a', 'b']\nnumbers.product(letters)\n# => [[1, 'a'], [1, 'b'], [2, 'a'], [2, 'b']]"},

        {name: "zip",
        effect: "Get the pairings of elements of two arrays, as long as those elements share an index",
        description: "When called on one array with another array as an arugment, it returns an array of the pairs of values in the the first and second array that share an index.",
        blockReturnValue: null,
        methodReturnValue: "an array of arrays of two elements.",
        notes: "The number of pairs will be equal to the length of the first array. If the first array has more elements than the second, some of the pairs will have nil values. If the first array has fewer elements than the second, some of the elements in the second array will be ignored.",
        example: "```\nnumbers = [1, 2, 3]\nletters = ['a', 'b', 'c']\nnumbers.zip(letters)\n# => [[1, 'a'], [2, 'b'], [3, 'c']]"},

        {name: "combination",
        effect: "Get all possible ways of selecting some number of elements from an array, while preserving order",
        description: "Accepts a positive integer as an argument. Yields arrays of that length with elements drawn from the initial array, where each yielded array preserves order and doesn't repeat elements.",
        blockReturnValue: null,
        methodReturnValue: null,
        notes: null,
        example: "```\nnumbers = [1, 2, 3]\nnumbers.combination(2).to_a\n# => [[1, 2], [1, 3], [2, 3]]"},

        {name: "permutation",
        effect: "Get all possible ways of selecting and rearranging some number of elements from an array",
        description: "Accepts a positive integer as an argument. Yields arrays of that length with elements drawn from the initial array, where each yielded array needen't preserve order and doesn't repeat elements.",
        blockReturnValue: null,
        methodReturnValue: null,
        notes: null,
        example: "```\nnumbers = [1, 2, 3]\nnumbers.permutation(2).to_a\n# => [[1, 2], [1, 3], [2, 1],\n#     [2, 3], [3, 1], [3, 2]]"},

        {name: "repeated_combination",
        effect: "Get all possible ways of selecting some number of elements from an array, while preserving order and allowing reselection",
        description: "Accepts a positive integer as an argument. Yields arrays of that length with elements drawn from the initial array, where each yielded array preserves order and may repeat elements.",
        blockReturnValue: null,
        methodReturnValue: null,
        notes: null,
        example: "```\nnumbers = [1, 2, 3]\nnumbers.repeated_combination(2).to_a\n# => [[1, 1], [1, 2], [1, 3],\n#     [2, 2], [2, 3], [3, 3]]"},

        {name: "repeated_permutation",
        effect: "Get all possible ways of selecting and rearranging some number of elements from an array, while allowing reselection",
        description: "Accepts a positive integer as an argument. Yields arrays of that length with elements drawn from the initial array, where each yielded array needn't preserve order and may repeat elements",
        blockReturnValue: null,
        methodReturnValue: null,
        notes: null,
        example: "```\nnumbers = [1, 2, 3]\nnumbers.repeated_permutation(2).to_a\n# => [[1, 1], [1, 2], [1, 3],\n#     [2, 1], [2, 2], [2, 3]\n#     [3, 1], [3, 2], [3, 3]]"},


    ]




}

export default methodData
    
