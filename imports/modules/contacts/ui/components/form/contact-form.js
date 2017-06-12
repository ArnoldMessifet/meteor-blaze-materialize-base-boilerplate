/**
 * TEMPLATE HELPERS
 */
Template.contactForm.helpers({
    formConfig() {
        let contactId = Template.instance().getContactId(),
            contact = Contacts.findOne({_id: contactId});

        return {
            id: "addContact",
            collection: "Contacts",
            type: contactId ? "update" : "insert",
            doc: contact,
            buttonContent: contactId ? "Modifier" : "Ajouter"
        };
    }
});

/**
 * TEMPLATE EVENTS
 */
Template.contactForm.events({});

/**
 * TEMPLATE LIFECYCLE
 */
Template.contactForm.onCreated(function () {
    this.getContactId = () => {
        return Session.get('contacts').state.contactId;
    };

    this.autorun(() => {
        this.subscribe('contacts');
    });
});

Template.contactForm.onRendered(function () {
    let template = this;

    Meteor.utils.setWrapperHeight();
});

/**
 * Miscellaneous
 */
AutoForm.addHooks(['addContact'], {
    before: {
        // Replace `formType` with the form `type` attribute to which this hook applies
        formType: function (doc) {
            // Potentially alter the doc
            doc.foo = 'bar';

            // Then return it or pass it to this.result()
            //return doc; (synchronous)
            //return false; (synchronous, cancel)
            //this.result(doc); (asynchronous)
            //this.result(false); (asynchronous, cancel)
        }
    },

    // The same as the callbacks you would normally provide when calling
    // collection.insert, collection.update, or Meteor.call
    after: {
        // Replace `formType` with the form `type` attribute to which this hook applies
        insert: function (error, result) {
        },
        update: function (error, result) {
        }
    },

    // Called when form does not have a `type` attribute
    onSubmit: function (insertDoc, updateDoc, currentDoc) {
        // You must call this.done()!
        //this.done(); // submitted successfully, call onSuccess
        //this.done(new Error('foo')); // failed to submit, call onError with the provided error
        //this.done(null, "foo"); // submitted successfully, call onSuccess with `result` arg set to "foo"
    },

    // Called when any submit operation succeeds
    onSuccess: function (formType, result) {
        if (formType === "update") {
            toastr.success("Enregistrement réussi", result.title || "Mise à jour du contact");
        } else {
            toastr.success("Enregistrement réussi", result.title || "Nouveau contact");
        }

        // go to contacts list
        TabsCollection.update({module: 'contacts', sort: -1}, {$set: {activ: true}});
    },

    // Called when any submit operation fails
    onError: function (formType, error) {
        console.log('===================================================');
        console.log('onError', error);
        console.log('===================================================');
        toastr.warning(error, "Erreurs dans le formulaire");
    },

    // Called every time an insert or typeless form
    // is revalidated, which can be often if keyup
    // validation is used.
    formToDoc: function (doc) {
        // console.log('===================================================');
        // console.log('formToDoc');
        // console.log('===================================================');
        // alter doc
        return doc;
    },

    // Called every time an update or typeless form
    // is revalidated, which can be often if keyup
    // validation is used.
    formToModifier: function (modifier) {
        // console.log('===================================================');
        // console.log('formToModifier');
        // console.log('===================================================');
        // alter modifier
        return modifier;
    },

    // Called whenever `doc` attribute reactively changes, before values
    // are set in the form fields.
    docToForm: function (doc, ss) {
        // console.log('===================================================');
        // console.log('docToForm');
        // console.log('===================================================');
        return doc;
    },

    // Called at the beginning and end of submission, respectively.
    // This is the place to disable/enable buttons or the form,
    // show/hide a "Please wait" message, etc. If these hooks are
    // not defined, then by default the submit button is disabled
    // during submission.
    beginSubmit: function () {
    },
    endSubmit: function () {
    }
});