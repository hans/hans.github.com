---
title: Book notes&#58; Argument realization
---

*Argument realization.* Beth Levin & Malka Rappaport Hovav. CUP, 2005.

# Challenges for theories of argument realization

> We follow Dowty (1991) and take as our primary criterion for developing a lexical semantic representation the ability to formulate a perspicuous theory of argument realization. Any semantic distinction that affects argumetn realization is relevant to the design of a lexical semantic representation, while any others are to be ignored (9–10).

First examples: claim that sound-production verbs have semantically distinct classes "internally produced" and "externally produced," which pattern syntactically:

1. ​
   1. The truck rumbled.
   2. *Peter rumbled the truck.
2. 
   1. The tea kettle whistled.
   2. *The boiling water whistled the tea kettle.
3. 
   1. The teacups clattered.
   2. I clattered the teacups as I loaded the dishwasher.
4. 
   1. The windows rattled.
   2. The storm rattled the windows.

[worried about indeterminacy / too many free parameters; easy to tell a just-so story — at least within a single language — about some aspect of meaning which successfully picks out the relevant syntactic classes]

> there is more than one way of semantically characterizing most verbs, and it is not always a priori obvious which characterization is appropriate for argument realization. Certainly, concepts with greater generality such as "change of state" or "activity" are prefereable in principle to more specific concepts such as "verb of bodily process" (13).

[WHY? From an acquisition perspective, more specific driving semantic aspects are more useful to a learner using syntax to bootstrap lexical semantics]

## The crossclassification of verbs and the status of verb classes

Closing argument claims that the constructionist and verb-class research program are well aligned:

> an important point of convergence ... : proponents of both approaches agree to a     large extet on what the elements of meaning are — be they lexical or extralexical — which determine the realization of arguments, and so the identification of these elements of meaning can be considered a real achievement of research into argument realization (18).

## Uniformity and variation in argument realization

> If the appropriate elements of meaning are chosen, verbs whose classification is clearcut with respect to these elements of meaning should have stable argument realization patterns [both within and across languages], while those whose classification is less clearcut are expected to show wider variation (21).

Should draw out multiple assumptions here:

1. the relevant "elements of meaning" are shared across languages;
2. the mapping between "elements of meaning" and argument structure is ideally stable across languages. (??? am I misunderstanding? this seems a very strong — and unnecessary — assumption)
3. "instability" / uncertainty in semantic class of verb => "instability" in argument realization. (why should this be the case? this is presupposing a very tight link between syntactic and semantic systems)

> Any theory of argument realiation taken together with a well-motivated theory of lexical semantic representation should allow researchers to predict which semantic classes of verbs will be stable and uniform in their argument realization options, in and across languages, and which will not (23).

[why? the syntax–semantics mapping can be a completely free parameter across languages, no? why assume that some semantic classes will always be realized in regular syntactic classes? Is there some underlying assumption of innateness here?]

## When subjects are not agents and objects are not patients

Interesting examples (#26) of nonagentive subjects. Also interesting, note that none of the following are acceptable in passive form!

1. This room sleeps five people. [subject is a location]
   1. *Five people are slept by this room.
   2. Five people (can) sleep in this room.
2. This edition of the textbook had added a new chapter. [subject is a location [?]]
   1. *A new chapter had been added by this edition of the textbook.
   2. A new chapter had been added in this edition of the textbook.
3. A dollar won't buy a cup of coffee anymore. [subject is a measure]
   1. *A cup of coffee can't be bought by a dollar anymore.
   2. ? A cup of coffee can't be bought with a dollar anymore.

# Semantic role lists

Basic idea: posit a small set of categories which allow us to capture grammatically relevant distinctions (i.e., allow us to predict how a verb's argument structure is realized from such semantic role assignments). For a particular verb, then, a semantic role acts as a grammatical equivalence class over its constituent legal members. (Such theories require us to develop a transformation between semantic role and syntactic structure, of course.)

> The current dominant approach to semantic roles takes them to be defined by recurring sets of lexical entailments ... imposed by verbs on their arguments. ... Every ver specifies certain entailments that hold if its arguments (e.g., *murder* entails that its subject acts volitionally) (38).

> Natural classes of arguments result when argument sof a number of verbs share certain lexical entailments. The commonly cited semantic roles can be viewed as labels for certain good-sized natural classes of entailments that are relevant to linguistic generalizations (39).

Immediate issues:

- **role fragmentation**: as we look closer and closer at verb syntax, we have to keep subdividing semantic roles in order to make accurate linguistic generalizations.
- **cross-role generalizations**: some generalizations cross-cut semantic role categories (e.g. in English *with* can accept both comitatives and instruments, whereas other languages separately mark these roles)

> The root of these problems is the assumption that semantic roles are taken to be *discrete and unanalyzable* ... given this, it is not possible to impose any structure over the set of semantic roles that can account for similarities in patterning or dependencies in cooccurrence. The small set of unanalyzed roles that characterizes an ideal semantic role approach, then, is incompatible with linguistic reality (42).

# Current approaches to lexical semantic representation

## Generalized semantic roles

### Dowty

Semantic roles are cluster concepts, with semantic features defining those clusters. No one feature is necessary or sufficient — compare with atomic semantic role representations of the previous chapter. Dowty introduces this theory to describe how semantic arguments get mapped onto subject and object positions.

> The basic idea is that there is no invariant entailment or set of entailments which determines access to subjecthood or objecthood (54).

> Although we have referred to subject and object selection rules, it is important to stress that for Dowty, these rules represent not a step in a derivation, but rather constraints "on what kind of lexical predicates may exist in natural language, out of many imaginable ones." A particular verb may "lexicalize," or determine, a particular pairing of semantic argument types and grammatical relations, but these pairings must conform to the "constraints" defined by the subject and object selection rules. In some sense, then, these rules define a set of possible verbs (56).

These rules are not part of the grammar, then, but constraints on the syntax–semantics interface. [Not clear what this is supposed to amount to — a claim about cognitive representation, maybe?]

### RRG

Similar semantic setup to Dowty's theory, but roles are directly integrated into grammatical reasoning. "Actor" and "Undergoer" roles act like syntactic "underlying subject" and "underlying object" sort of entities.

## Predicate decomposition approaches

Verb meanings consist of a complex structure of shared predicates, combined with a small amount of "idiosyncratic" *root meaning*. (*open*, *dry*, and *close* all share the structure that they cause some object to reach a new state; the particular resulting state is the idiosyncratic property of each verb.)

How to relate to semantic roles? Lots of verbs might contain a predicate `CAUSE(X,Y)`; the "agent" role in some event is simply the first argument to the predicate `CAUSE` — in this case `X`.