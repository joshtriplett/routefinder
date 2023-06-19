var searchIndex = JSON.parse('{\
"routefinder":{"doc":"Routefinder","t":"DDNNDNDDDENNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL","n":["Capture","Captures","Dot","Exact","Match","Param","ReverseMatch","RouteSpec","Router","Segment","Slash","Wildcard","add","append","best_match","borrow","borrow","borrow","borrow","borrow","borrow","borrow","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","captures","captures","clone","clone","clone","clone_into","clone_into","clone_into","cmp","cmp","cmp","default","default","default","deref","deref","deref_mut","eq","eq","eq","extend","fmt","fmt","fmt","fmt","fmt","fmt","fmt","fmt","fmt","from","from","from","from","from","from","from","from","from","from","from","from_iter","from_iter","from_str","get","get_handler","get_handler_mut","handler","into","into","into","into","into","into","into","into_iter","into_iter","into_iter","into_iter","into_iter","into_owned","into_owned","is_empty","iter","iter","iter_mut","len","match_iter","matches","matches","name","new","new","new","new","params","partial_cmp","partial_cmp","partial_cmp","path","push","route","route","segments","set_wildcard","source","template","to_owned","to_owned","to_owned","to_string","to_string","try_from","try_from","try_from","try_from","try_from","try_from","try_from","try_from","try_from","try_into","try_into","try_into","try_into","try_into","try_into","try_into","type_id","type_id","type_id","type_id","type_id","type_id","type_id","value","wildcard"],"q":[[0,"routefinder"]],"d":["An individual key-value pair","Captured params and a wildcard","represented by a . in the route spec and matching one . in …","represented by any free text in the route spec, this …","The output of a successful application of a <code>RouteSpec</code> to a …","represented by :name, where name is how the capture will be","This struct represents the result of a reverse lookup from …","Routefinder’s representation of the parsed route","The top level struct for routefinder","the internal representation of a parsed component of a …","represented by a / in the route spec and matching one /","represented by * in the spec, this will capture everything …","Adds a route to the router, accepting any type that …","Combine two captures","Returns the single best route match as defined by the …","","","","","","","","","","","","","","","Returns the <code>Captures</code> for this match","Returns the <code>Captures</code> for this ReverseMatch","","","","","","","","","","","","","","","","","","","","","","","","","","","","","Returns the argument unchanged.","","","Returns the argument unchanged.","Returns the argument unchanged.","","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","","","","","checks the list of params for a matching key","get a reference to the handler for the given route spec","get a mut reference to the handler for the given route spec","Returns a reference to the handler associated with this …","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","","","","","","transforms this potentially-borrowed Capture into a ’…","Transforms this Captures into a ’static Captures which …","returns true if no routes have been added","Returns an iterator of references to <code>(&amp;RouteSpec, &amp;Handler)</code>","Iterate over params as str pairs","returns an iterator of <code>(&amp;RouteSpec, &amp;mut Handler)</code>","returns the number of routes that have been added","Returns an iterator over the possible matches for this …","Returns <em>all</em> of the matching routes for a given path. This …","Returns a vec of captured str slices for this routespec","returns the name of this capture","Builds a new router","Build a new Capture from the provided key and value. …","Builds a new empty Captures","Attempts to build a new ReverseMatch. Returns None if the …","returns a slice of captures","","","","returns the exact path that was matched","Add the provided Capture (or capture-like) to the end of …","Returns the routespec for this route","Returns the <code>RouteSpec</code> for this ReverseMatch","Slice accessor for the component <code>Segment</code>s in this RouteSpec","set the captured wildcard to the provided &amp;str or String. …","Retrieve a reference to the original route definition, if …","populate this route spec with the params and/or wildcard …","","","","","","","","","","","","","","","","","","","","","","","","","","","","","returns the value of this capture","returns what the * wildcard matched, if any"],"i":[0,0,10,10,0,10,0,0,0,0,10,10,1,5,1,1,12,5,7,10,9,2,1,12,5,7,10,9,2,7,9,10,9,2,10,9,2,7,10,2,1,12,5,5,7,5,7,10,2,5,1,12,5,7,10,9,9,2,2,1,12,12,12,5,5,7,10,9,2,2,1,5,2,5,1,1,7,1,12,5,7,10,9,2,1,1,1,5,5,12,5,1,1,5,1,1,1,1,2,12,1,12,5,9,5,7,10,2,7,5,7,9,2,5,2,2,10,9,2,9,2,1,12,5,7,10,9,2,2,2,1,12,5,7,10,9,2,1,12,5,7,10,9,2,12,5],"f":[0,0,0,0,0,0,0,0,0,0,0,0,[[1,[3,[2]]],4],[[5,5]],[[1,6],[[8,[7]]]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[7,5],[9,5],[10,10],[9,9],[2,2],[[]],[[]],[[]],[[7,7],11],[[10,10],11],[[2,2],11],[[],1],[[],12],[[],5],[5],[7],[5],[[7,7],13],[[10,10],13],[[2,2],13],[[5,14]],[[1,15],16],[[12,15],16],[[5,15],16],[[[7,[17]],15],16],[[10,15],16],[[9,15],16],[[9,15],16],[[2,15],16],[[2,15],16],[[]],[[],12],[[],12],[[]],[[]],[14,5],[[]],[[]],[[]],[[]],[[[18,[10]]],2],[14,1],[14,5],[6,[[4,[2]]]],[[5,6],[[8,[6]]]],[[1,[3,[2]]],8],[[1,[3,[2]]],8],[7],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[1],[1],[1],[5],[5],[12,12],[5,5],[1,13],[1,19],0,[1,19],[1,20],0,[[1,6],[[18,[7]]]],[[2,6],[[8,[[18,[6]]]]]],[12,6],[[],1],[[[22,[[21,[6]]]],[22,[[21,[6]]]]],12],[[],5],[[5,2],[[8,[9]]]],[5],[[7,7],[[8,[11]]]],[[10,10],[[8,[11]]]],[[2,2],[[8,[11]]]],[7,6],[[5,[22,[12]]]],[7,2],[9,2],[2],[[5,[22,[[21,[6]]]]]],[2,[[8,[6]]]],[[2,5],[[8,[9]]]],[[]],[[]],[[]],[[],23],[[],23],[[],4],[[],4],[[],4],[[],4],[[],4],[[],4],[6,[[4,[2]]]],[[],4],[23,[[4,[2]]]],[[],4],[[],4],[[],4],[[],4],[[],4],[[],4],[[],4],[[],24],[[],24],[[],24],[[],24],[[],24],[[],24],[[],24],[12,6],[5,[[8,[6]]]]],"c":[],"p":[[3,"Router"],[3,"RouteSpec"],[8,"TryInto"],[4,"Result"],[3,"Captures"],[15,"str"],[3,"Match"],[4,"Option"],[3,"ReverseMatch"],[4,"Segment"],[4,"Ordering"],[3,"Capture"],[15,"bool"],[8,"IntoIterator"],[3,"Formatter"],[6,"Result"],[8,"Debug"],[3,"Vec"],[8,"Iterator"],[15,"usize"],[4,"Cow"],[8,"Into"],[3,"String"],[3,"TypeId"]]},\
"smartcow":{"doc":"This crate offers a small utility type, <code>SmartCow</code> that …","t":"NNELLLLLLLLLLLLLLLLLLLLLLLLLLLLLL","n":["Borrowed","Owned","SmartCow","as_ref","as_ref","borrow","borrow","borrow","borrow_mut","clone","clone_into","default","deref","eq","eq","eq","eq","fmt","fmt","from","from","from","from","from","hash","into","into_owned","to_owned","to_owned","to_string","try_from","try_into","type_id"],"q":[[0,"smartcow"]],"d":["a <code>std::str</code> borrow","a <code>smartstring::SmartString</code>","The primary type for this crate, which holds either a …","","","","Returns a borrowed SmartCow with a shorter lifetime than …","","","","","","","","","","","","","","","","","Returns the argument unchanged.","","Calls <code>U::from(self)</code>.","Build a ’static duplicate of this SmartCow by value, by …","","Build a ’static duplicate of this SmartCow by cloning a …","","","",""],"i":[1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],"f":[0,0,0,[1],[1,2],[1,2],[1,1],[[]],[[]],[1,1],[[]],[[],1],[1],[[1,3],4],[[1,1],4],[[1,3],4],[[1,2],4],[[1,5],6],[[1,5],6],[[[8,[7]]],1],[2,1],[3,1],[[[9,[2]]],1],[[]],[[1,10]],[[]],[1,1],[[]],[1,1],[[],3],[[],11],[[],11],[[],12]],"c":[],"p":[[4,"SmartCow"],[15,"str"],[3,"String"],[15,"bool"],[3,"Formatter"],[6,"Result"],[3,"LazyCompact"],[3,"SmartString"],[4,"Cow"],[8,"Hasher"],[4,"Result"],[3,"TypeId"]]},\
"smartstring":{"doc":"Smart String","t":"DSDQDRDILLLLLALLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLGG","n":["Compact","DEALLOC","Drain","InlineArray","LazyCompact","MAX_INLINE","SmartString","SmartStringMode","add","add","add","add","add","alias","as_mut","as_mut_str","as_ref","as_ref","as_str","borrow","borrow","borrow","borrow","borrow","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","capacity","clear","clone","clone_into","cmp","default","deref","deref_mut","drain","drop","drop","eq","eq","eq","eq","extend","extend","extend","extend","extend","extend","extend","fmt","fmt","fmt","fmt","fmt","from","from","from","from","from","from","from","from","from","from","from_iter","from_iter","from_iter","from_iter","from_iter","from_iter","from_str","hash","index","index","index","index","index","index","index_mut","index_mut","index_mut","index_mut","index_mut","index_mut","insert","insert_str","into","into","into","into","into_iter","is_empty","is_inline","len","new","new_const","new_const","next","next_back","partial_cmp","partial_cmp","pop","push","push_str","remove","replace_range","retain","shrink_to_fit","size_hint","split_off","to_owned","to_string","truncate","try_from","try_from","try_from","try_from","try_into","try_into","try_into","try_into","type_id","type_id","type_id","type_id","write_str","CompactString","String"],"q":[[0,"smartstring"],[128,"smartstring::alias"]],"d":["A compact string representation equal to <code>String</code> in size …","A constant to decide whether to turn a wrapped string back …","A draining iterator for a <code>SmartString</code>.","The inline string type for this layout.","A representation similar to <code>Compact</code> but which doesn’t …","The maximum capacity of an inline string, in bytes.","A smart string.","Marker trait for <code>SmartString</code> representations.","","","","","","Convenient type aliases.","","Get a reference to the string as a mutable string slice.","","","Get a reference to the string as a string slice.","","","","","","","","","","","Return the currently allocated capacity of the string.","Clear the string.","Clone a <code>SmartString</code>.","","","","","","Construct a draining iterator over a given range.","","","","","","","","","","","","","","","","","","","Returns the argument unchanged.","","Returns the argument unchanged.","","","","","","Returns the argument unchanged.","Returns the argument unchanged.","","","","","","","","","","","","","","","","","","","","","Insert a <code>char</code> into the string at the given index.","Insert a string slice into the string at the given index.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","","Test whether the string is empty.","Test whether the string is currently inlined.","Return the length in bytes of the string.","Construct an empty string.","Construct an empty string.","Construct an empty string.","","","","","Pop a <code>char</code> off the end of the string.","Push a character to the end of the string.","Copy a string slice onto the end of the string.","Remove a <code>char</code> from the string at the given index.","Replaces a range with the contents of a string slice.","Filter out <code>char</code>s not matching a predicate.","Shrink the capacity of the string to fit its contents …","","Split the string into two at the given index.","","","Truncate the string to <code>new_len</code> bytes.","","","","","","","","","","","","","","A convenience alias for a <code>Compact</code> layout <code>SmartString</code>.","A convenience alias for a <code>LazyCompact</code> layout <code>SmartString</code>."],"i":[0,1,0,1,0,0,0,0,2,2,2,2,2,0,2,2,2,2,2,8,2,2,14,16,8,2,2,14,16,2,2,2,2,2,2,2,2,2,8,2,2,2,2,2,2,2,2,2,2,2,2,8,2,2,14,16,8,2,2,2,2,2,2,2,14,16,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,8,2,14,16,8,2,2,2,2,2,2,8,8,2,2,2,2,2,2,2,2,2,8,2,2,2,2,8,2,14,16,8,2,14,16,8,2,14,16,2,0,0],"f":[0,0,0,0,0,0,0,0,[[[2,[1]],3]],[[[2,[1]],3]],[[[2,[1]],4]],[[[2,[1]],[2,[1]]]],[[[2,[1]],[2,[1]]]],0,[[[2,[1]]],4],[[[2,[1]]],4],[[[2,[1]]]],[[[2,[1]]],4],[[[2,[1]]],4],[[]],[[]],[[[2,[1]]],4],[[]],[[]],[[]],[[]],[[[2,[1]]],4],[[]],[[]],[[[2,[1]]],5],[[[2,[1]]]],[[[2,[1]]],[[2,[1]]]],[[]],[[[2,[1]],[2,[1]]],6],[[],[[2,[1]]]],[[[2,[1]]]],[[[2,[1]]]],[[[2,[1]],[7,[5]]],[[8,[1]]]],[[[8,[1]]]],[[[2,[1]]]],[[[2,[1]],3],9],[[[2,[1]],4],9],[[[2,[1]],[2,[1]]],9],[[[2,[1]],4],9],[[[2,[1]],10]],[[[2,[1]],10]],[[[2,[1]],10]],[[[2,[1]],10]],[[[2,[1]],10]],[[[2,[1]],10]],[[[2,[1]],10]],[[[8,[1]],11],[[13,[12]]]],[[[2,[1]],11],[[13,[12]]]],[[[2,[1]],11],[[13,[12]]]],[[14,11],15],[[16,11],15],[[]],[3,[[2,[1]]]],[[]],[4,[[2,[1]]]],[[[17,[4]]],[[2,[1]]]],[4,[[2,[1]]]],[[[18,[4]]],[[2,[1]]]],[3,[[2,[1]]]],[[]],[[]],[10,[[2,[1]]]],[10,[[2,[1]]]],[10,[[2,[1]]]],[10,[[2,[1]]]],[10,[[2,[1]]]],[10,[[2,[1]]]],[4,[[13,[[2,[1]]]]]],[[[2,[1]],19]],[[[2,[1]],[20,[5]]]],[[[2,[1]],[21,[5]]]],[[[2,[1]],[22,[5]]]],[[[2,[1]],23]],[[[2,[1]],[24,[5]]]],[[[2,[1]],[25,[5]]]],[[[2,[1]],[20,[5]]]],[[[2,[1]],23]],[[[2,[1]],[24,[5]]]],[[[2,[1]],[25,[5]]]],[[[2,[1]],[22,[5]]]],[[[2,[1]],[21,[5]]]],[[[2,[1]],5,26]],[[[2,[1]],5,4]],[[]],[[]],[[]],[[]],[[]],[[[2,[1]]],9],[[[2,[1]]],9],[[[2,[1]]],5],[[],[[2,[1]]]],[[],[[2,[14]]]],[[],[[2,[16]]]],[[[8,[1]]],27],[[[8,[1]]],27],[[[2,[1]],4],[[27,[6]]]],[[[2,[1]],[2,[1]]],[[27,[6]]]],[[[2,[1]]],[[27,[26]]]],[[[2,[1]],26]],[[[2,[1]],4]],[[[2,[1]],5],26],[[[2,[1]],[7,[5]],4]],[[[2,[1]],28]],[[[2,[1]]]],[[[8,[1]]]],[[[2,[1]],5],[[2,[1]]]],[[]],[[],3],[[[2,[1]],5]],[[],13],[[],13],[[],13],[[],13],[[],13],[[],13],[[],13],[[],13],[[],29],[[],29],[[],29],[[],29],[[[2,[1]],4],[[13,[12]]]],0,0],"c":[],"p":[[8,"SmartStringMode"],[3,"SmartString"],[3,"String"],[15,"str"],[15,"usize"],[4,"Ordering"],[8,"RangeBounds"],[3,"Drain"],[15,"bool"],[8,"IntoIterator"],[3,"Formatter"],[3,"Error"],[4,"Result"],[3,"Compact"],[6,"Result"],[3,"LazyCompact"],[4,"Cow"],[3,"Box"],[8,"Hasher"],[3,"RangeTo"],[3,"RangeFrom"],[3,"RangeInclusive"],[3,"RangeFull"],[3,"RangeToInclusive"],[3,"Range"],[15,"char"],[4,"Option"],[8,"FnMut"],[3,"TypeId"]]},\
"static_assertions":{"doc":"Banner","t":"OOOOOOOOOOOOOOOOOOO","n":["assert_cfg","assert_eq_align","assert_eq_size","assert_eq_size_ptr","assert_eq_size_val","assert_fields","assert_impl_all","assert_impl_any","assert_impl_one","assert_not_impl_all","assert_not_impl_any","assert_obj_safe","assert_trait_sub_all","assert_trait_super_all","assert_type_eq_all","assert_type_ne_all","const_assert","const_assert_eq","const_assert_ne"],"q":[[0,"static_assertions"]],"d":["Asserts that a given configuration is set.","Asserts that types are equal in alignment.","Asserts that types are equal in size.","Asserts that values pointed to are equal in size.","Asserts that values are equal in size.","Asserts that the type has the given fields.","Asserts that the type implements <em>all</em> of the given traits.","Asserts that the type implements <em>any</em> of the given traits.","Asserts that the type implements exactly one in a set of …","Asserts that the type does <strong>not</strong> implement <em>all</em> of the given …","Asserts that the type does <strong>not</strong> implement <em>any</em> of the given …","Asserts that the traits support dynamic dispatch (…","Asserts that the trait is a child of all of the other …","Asserts that the trait is a parent of all of the other …","Asserts that <em>all</em> types in a list are equal to each other.","Asserts that <em>all</em> types are <strong>not</strong> equal to each other.","Asserts that constant expressions evaluate to <code>true</code>.","Asserts that constants are equal in value.","Asserts that constants are <strong>not</strong> equal in value."],"i":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"f":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"c":[],"p":[]}\
}');
if (typeof window !== 'undefined' && window.initSearch) {window.initSearch(searchIndex)};
if (typeof exports !== 'undefined') {exports.searchIndex = searchIndex};
