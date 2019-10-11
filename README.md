## Get.On Challenge

### Outlining the architecture of the react app

First I will develop the react/redux app that will then be coupled
with a backend written with fastify and mongodb

As described in the challenge those should be:
Images, Videos, Text, Multiple-choice questions, Subjective Questions
The screen will be divided into two columns on the left there will be a
menu to display the components that are available for the therapist and
on the right the intervention that has been created by clicking on the
components on the left.

```
---------------------------------------------
| Video |  Click together your intervention |
| Image |  <Video />                        |
| ...   |  <Text /> ...                     |
```

When clicking on one of the components on the left, it will then create
an EditableComponent in the intervention on the right.

for example:
```
<Intervention>
  <Text />
  <Image />
  <Video />
  <MultipleChoiceQuestion />
  <SubjectiveQuestion />
</Intervention>
```

the application store would hold the data of the intervention
and gets persisted to mongodb with fastify and mongoose in the backend

```
application_state: {
  documents: [
    { type: 'Image', link: 'image link' },
    { type: 'Video', link: 'youtube link' },
    { type: 'Text', text: 'youtube link' },
    { type: 'MultipleChoiceQuestion', question: 'Question',
      possibleAnswers: [
        'Answer 1',
        'Answer 2',
        'Answer 3',
      ]
    },
    { type: 'SubjectiveQuestion', question: 'Question' }
  ]
}
```
