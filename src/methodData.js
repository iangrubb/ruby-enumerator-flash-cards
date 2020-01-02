
const methodData = {

    easy: [
        {name: "each",
        effect: "Execute the code block for each element of the array",
        description: "",
        blockReturnType: "",
        methodReturnValue: "",
        example: ""},

        {name: "map",
        effect: "Construct a new array based on a one-to-one mapping from the initial array",
        description: "",
        blockReturnType: "",
        methodReturnValue: "",
        example: "```\ninitial_array = [1, 2, 3]\ninitial_array.map{|number| number + 1}\n# => [2, 3, 4]"},

        {name: "select",
        effect: "Get only the elements of the array that satisfy some condition",
        description: "",
        blockReturnType: "",
        methodReturnValue: "",
        example: ""},

        {name: "reject",
        effect: "Get the elements of the array except those that satisfy some condition",
        description: "",
        blockReturnType: "",
        methodReturnValue: "",
        example: ""},

        {name: "find",
        effect: "Find the first element in the array that satisfies some condition",
        description: "",
        blockReturnType: "",
        methodReturnValue: "",
        example: ""},
        
        {name: "none?",
        effect: "Determine whether no elements in the array satisfy some condition",
        description: "",
        blockReturnType: "",
        methodReturnValue: "",
        example: ""},
        
        {name: "all?",
        effect: "Determine whether all elements in the array satisfy some condition",
        description: "",
        blockReturnType: "",
        methodReturnValue: "",
        example: ""},
        
        {name: "any?",
        effect: "Determine whether any elements in the array satisfy some condition",
        description: "",
        blockReturnType: "",
        methodReturnValue: "",
        example: ""},
        
        {name: "one?",
        effect: "Determine whether exactly one element in the array satisfies some condition",
        description: "",
        blockReturnType: "",
        methodReturnValue: "",
        example: ""},

        {name: "count",
        effect: "Determine how many elements in the array satsify some condition",
        description: "",
        blockReturnType: "",
        methodReturnValue: "",
        example: ""},
        

    ], medium: [

        {name: "max_by",
        effect: "Find the element in the array that maximizes some attribute",
        description: "",
        blockReturnType: "",
        methodReturnValue: "",
        example: ""},
        
        {name: "min_by",
        effect: "Find the element in the array that minimizes some attribute",
        description: "",
        blockReturnType: "",
        methodReturnValue: "",
        example: ""},

        {name: "sort_by",
        effect: "Sort the elements of the array according to some attribute",
        description: "",
        blockReturnType: "",
        methodReturnValue: "",
        example: ""},

        {name: "reduce",
        effect: "Combine the elements of the array into a single element",
        description: "",
        blockReturnType: "",
        methodReturnValue: "",
        example: ""},

        {name: "each_with_object",
        effect: "Mutate an object for each element in the array",
        description: "",
        blockReturnType: "",
        methodReturnValue: "",
        example: ""},

        {name: "flat_map",
        effect: "Construct a new array based on a one-to-many mapping from the initial array",
        description: "",
        blockReturnType: "",
        methodReturnValue: "",
        example: ""},

        {name: "partition",
        effect: "Partition the elements of an array based on whether they satisfy some condition",
        description: "",
        blockReturnType: "",
        methodReturnValue: "",
        example: ""},

        {name: "group_by",
        effect: "Group the elements of an array based on whether they share some kind of attribute",
        description: "",
        blockReturnType: "",
        methodReturnValue: "",
        example: ""},

        {name: "drop_while",
        effect: "Get all the elements of the array, except those that precede the first element that fails to satisfy some condition",
        description: "",
        blockReturnType: "",
        methodReturnValue: "",
        example: ""},

        {name: "take_while",
        effect: "Get only the elements of the array that precede the first element that fails to satisfy some condition",
        description: "",
        blockReturnType: "",
        methodReturnValue: "",
        example: ""},



    ], hard: [

        {name: "each_cons",
        effect: "Execute the code block for each consecutive portion of the array of some length",
        description: "",
        blockReturnType: "",
        methodReturnValue: "",
        example: ""},

        {name: "each_slice",
        effect: "Execute the code block for slice of the array of some length",
        description: "",
        blockReturnType: "",
        methodReturnValue: "",
        example: ""},

        {name: "product",
        effect: "Get all of the pairings of elements of two arrays",
        description: "",
        blockReturnType: "",
        methodReturnValue: "",
        example: ""},

        {name: "zip",
        effect: "Get the pairings of elements of two arrays, as long as those elements share an index",
        description: "",
        blockReturnType: "",
        methodReturnValue: "",
        example: ""},

        {name: "combination",
        effect: "Get all possible ways of selecting some number of elements from the array, while preserving order",
        description: "",
        blockReturnType: "",
        methodReturnValue: "",
        example: ""},

        {name: "permutation",
        effect: "Get all possible ways of selecting and rearranging some number of elements from the array",
        description: "",
        blockReturnType: "",
        methodReturnValue: "",
        example: ""},

        {name: "repeated_combination",
        effect: "Get all possible ways of selecting some number of elements from the array, while preserving order and allowing reselection",
        description: "",
        blockReturnType: "",
        methodReturnValue: "",
        example: ""},

        {name: "repeated_permutation",
        effect: "Get all possible ways of selecting and rearranging some number of elements from the array, while allowing reselection",
        description: "",
        blockReturnType: "",
        methodReturnValue: "",
        example: ""},


    ]




}

export default methodData
    
